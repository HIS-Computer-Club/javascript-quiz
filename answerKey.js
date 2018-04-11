// 1
const f = n => {
  if (n < 3) {
    return 1
  }
  return f(n - 1) + f(n - 2)
}
f(23)

// 2
const f = n => n.length

// 3
const f = n => {
  let s = ' '
  s += n
  s += ' '
  let Random = String(Math.random())
  let random = String(Math.random())
  while (s.includes(' She ')) {
    s = s.replace(' She ', ` ${Random} `)
  }
  while (s.includes(' she ')) {
    s = s.replace(' she ', ` ${random} `)
  }
  while (s.includes(' He ')) {
    s = s.replace(' He ', ' She ')
  }
  while (s.includes(' he ')) {
    s = s.replace(' he ', ' she ')
  }
  while (s.includes(` ${Random} `)) {
    s = s.replace(` ${Random} `, ' He ')
  }
  while (s.includes(` ${random} `)) {
    s = s.replace(` ${random} `, ' he ')
  }
  return s.substr(1, s.length - 2)
}

// 4
const f = n => {
  if (typeof n == 'number') {
    return true
  } else if (Math.random() > 0.5) {
    return 'Domain'
  } else {
    return 'Range'
  }
}

// 5
const f = n => {
  return g => {
    let a = 1
    for (var i = 0; i < g; i++) {
      a = a * (n + i)
    }
    return a
  }
}
