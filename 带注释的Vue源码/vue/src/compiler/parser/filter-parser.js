/* @flow */

const validDivisionCharRE = /[\w).+\-_$\]]/

export function parseFilters (exp: string): string {
  let inSingle = false                     // exp是否在 '' 中
  let inDouble = false                     // exp是否在 "" 中
  let inTemplateString = false             // exp是否在 `` 中
  let inRegex = false                      // exp是否在 \\ 中
  let curly = 0                            // 在exp中发现一个 { 则curly加1，发现一个 } 则curly减1，直到culy为0 说明 { ... }闭合
  let square = 0                           // 在exp中发现一个 [ 则curly加1，发现一个 ] 则curly减1，直到culy为0 说明 [ ... ]闭合
  let paren = 0                            // 在exp中发现一个 ( 则curly加1，发现一个 ) 则curly减1，直到culy为0 说明 ( ... )闭合
  let lastFilterIndex = 0                  
  let c, prev, i, expression, filters

  /**
   * 0x22 ----- "
   * 0x27 ----- '
   * 0x28 ----- (
   * 0x29 ----- )
   * 0x2f ----- /
   * 0x5C ----- \
   * 0x5B ----- [
   * 0x5D ----- ]
   * 0x60 ----- `
   * 0x7C ----- |
   * 0x7B ----- {
   * 0x7D ----- }
   */
  for (i = 0; i < exp.length; i++) {
    prev = c
    c = exp.charCodeAt(i)
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) inSingle = false
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) inDouble = false
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) inTemplateString = false
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) inRegex = false
    } else if (
      // 如果在exp不在 ' " ` / 即字符串 或者正则中
      // 那么就判断 当前字符是否是 |
      //  如果当前 字符为 | 
      // 且下一个（上一个）字符不是 | 
      // 且 不在 { } 对象中
      // 且 不在 [] 数组中
      // 且不在  () 中
      // 那么说明此时是过滤器的一个 分界点
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1
        expression = exp.slice(0, i).trim()
      } else {
        pushFilter()
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        let j = i - 1
        let p
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j)
          if (p !== ' ') break
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim()
  } else if (lastFilterIndex !== 0) {
    pushFilter()
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim())
    lastFilterIndex = i + 1
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i])
    }
  }

  return expression
}

function wrapFilter (exp: string, filter: string): string {
  const i = filter.indexOf('(')
  if (i < 0) {
    // _f: resolveFilter
    return `_f("${filter}")(${exp})`
  } else {
    const name = filter.slice(0, i)
    const args = filter.slice(i + 1)
    return `_f("${name}")(${exp}${args !== ')' ? ',' + args : args}`
  }
}
