/* ข้อสอบข้อที่ 4  |  ประเภท: เลือกตอบเชิงซ้อน  (มีกราฟเส้นสร้างจากข้อมูลด้วย SVG) */
registerQuestion({
  id: 4,
  theme: { emoji: '👶', color: '#ec4899' },

  part1: { type: 'complex', processes: ['use'] },

  part2: {
    title: 'สถิติเด็กเกิดใหม่',

    /* สร้างกราฟจากข้อมูล (แก้ตัวเลขได้ที่นี่) */
    scenarioHtml: (function () {
      var years  = ['2559','2560','2561','2562','2563','2564','2565','2566','2567','2568*'];
      var births = [92030, 90904, 84477, 77312, 70973, 61604, 55001, 56875, 52104, 45685];
      var deaths = [44223, 43371, 44183, 46853, 44645, 58889, 51486, 51486, 49920, 48869];
      var W = 680, H = 360, L = 70, R = 20, T = 30, B = 50;
      var pw = W - L - R, ph = H - T - B;
      function x(i) { return L + pw * (i + 0.5) / years.length; }
      function y(v) { return T + ph * (1 - v / 100000); }
      var s = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="กราฟเส้นแสดงจำนวนเด็กเกิดใหม่และจำนวนคนตายในกรุงเทพมหานคร ปี พ.ศ. 2559–2568">';
      for (var g = 0; g <= 100000; g += 20000) {
        s += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(g) + '" y2="' + y(g) + '" stroke="#d9dee7" stroke-dasharray="3 3"/>';
        s += '<text x="' + (L - 8) + '" y="' + (y(g) + 4) + '" text-anchor="end" font-size="11" fill="#5b6575">' + g.toLocaleString('en-US') + '</text>';
      }
      s += '<text x="6" y="16" font-size="11" fill="#5b6575">(จำนวนคน)</text>';
      years.forEach(function (yr, i) {
        s += '<text x="' + x(i) + '" y="' + (H - 28) + '" text-anchor="middle" font-size="11" fill="#5b6575">' + yr + '</text>';
      });
      s += '<text x="' + (W - R) + '" y="' + (H - 10) + '" text-anchor="end" font-size="11" fill="#5b6575">(ปี พ.ศ.)</text>';
      /* name = ชื่อชุดข้อมูล (ใช้เป็นชื่อในข้อมูลกระบวนการ: ผู้สอบชี้/แตะดูจุดไหน) */
      function line(data, color, above, name) {
        var pts = data.map(function (v, i) { return x(i) + ',' + y(v); }).join(' ');
        s += '<polyline points="' + pts + '" fill="none" stroke="' + color + '" stroke-width="2"/>';
        data.forEach(function (v, i) {
          s += '<circle cx="' + x(i) + '" cy="' + y(v) + '" r="4.5" fill="' + color + '"/>';
          s += '<circle cx="' + x(i) + '" cy="' + y(v) + '" r="10" fill="transparent" data-track="กราฟ ' + name + ' ' + years[i].replace('*', '') + '"/>';
          var dy = above[i] ? -10 : 17;
          s += '<text x="' + x(i) + '" y="' + (y(v) + dy) + '" text-anchor="middle" font-size="10.5" fill="' + color + '">' + v.toLocaleString('en-US') + '</text>';
        });
      }
      /* ตำแหน่งป้ายตัวเลข: true = เหนือจุด, false = ใต้จุด */
      line(deaths, '#1d7fd6', [false,false,false,false,false,false,false,false,false,true], 'ตาย');
      line(births, '#d6368f', [true,true,true,true,true,true,true,true,true,false], 'เกิดใหม่');
      s += '<text x="' + x(5) + '" y="' + (y(58889) + 52) + '" text-anchor="middle" font-size="10" fill="#2a8c7a">สถานการณ์โควิด-19</text>';
      s += '</svg>';
      s += '<div class="legend"><span><i style="background:#d6368f"></i>เกิดใหม่</span><span><i style="background:#1d7fd6"></i>ตาย</span></div>';
      return '<p>สถิติเด็กเกิดใหม่และอัตราการตายในกรุงเทพมหานคร ตั้งแต่ปี พ.ศ. 2559 – 2568 เป็นดังนี้</p>' + s +
             '<p class="small">* ปี 2568 เป็นปีแรกที่จำนวนเด็กเกิดใหม่น้อยกว่าจำนวนการตาย โดยน้อยกว่าถึง 3,200 คน (ประมาณ)</p>';
    })(),

    askHtml: `<p><b>จากข้อมูลข้างต้น ข้อมูลต่อไปนี้ถูกต้องใช่หรือไม่ จงเลือก “ใช่” หรือ “ไม่ใช่” ในแต่ละข้อความ</b></p>`,
    sourceHtml: `สถิติจำนวนการเกิด–ตาย ในกรุงเทพมหานคร กรมการปกครอง`,

    answer: {
      type: 'complex',
      choices: ['ใช่', 'ไม่ใช่'],
      statements: [
        'ในช่วงปี พ.ศ. 2559 – 2568 ปี พ.ศ. 2564 มีอัตราการตายสูงที่สุด',
        'ในปี พ.ศ. 2567 อัตราเด็กเกิดใหม่มากกว่าอัตราการตาย 2,184 คน',
        'ในปี พ.ศ. 2559 อัตราเด็กเกิดใหม่แตกต่างจากอัตราการตายมากที่สุด',
        'ในช่วงปี พ.ศ. 2559 – 2568 อัตราการเกิดใหม่น้อยลงเรื่อย ๆ'
      ],
      correct: ['ใช่', 'ใช่', 'ใช่', 'ไม่ใช่'],
      scoring: [[4, 2], [3, 1]]
    },
    workings: true,
    mathPad: {
      chips: ['คน'],
      phrases: ['ปี พ.ศ. ', 'เกิดใหม่ ', 'ตาย ', 'ผลต่าง '],
      calculator: true,
      placeholder: 'ใช้ทดเลขอ่านกราฟได้ เช่น\nผลต่างปี 2567 = 52,104 − 49,920 = ...'
    }
  },

  part3: {
    answerHtml: `
      <p><b>ตอบ ใช่ / ใช่ / ใช่ / ไม่ใช่ ตามลำดับ</b></p>
      <ol>
        <li><b>ใช่</b> ปี 2564 มีอัตราการตายสูงที่สุด คือ 58,889 คน เนื่องจากอยู่ในช่วงการแพร่ระบาดของ COVID-19</li>
        <li><b>ใช่</b> ปี 2567 เด็กเกิดใหม่มากกว่าการตาย 52,104 − 49,920 = 2,184 คน</li>
        <li><b>ใช่</b> ปี 2559 เด็กเกิดใหม่มากกว่าการตาย 92,030 − 44,223 = 47,807 คน
            ซึ่งมากที่สุดในช่วงปี พ.ศ. 2559 – 2568</li>
        <li><b>ไม่ใช่</b> ปี 2566 มีเด็กเกิดใหม่ (56,875 คน) มากกว่าปี 2565 (55,001 คน)</li>
      </ol>`,
    rubric: [
      { text: 'ตอบถูกทั้ง 4 ข้อ คือ ใช่ ใช่ ใช่ ไม่ใช่ ตามลำดับ', score: 2 },
      { text: 'ตอบถูก 3 ใน 4 ข้อ', score: 1 },
      { text: 'ตอบถูก 2 ข้อ หรือ ตอบถูก 1 ข้อ หรือ ตอบผิดทุกข้อ หรือ ไม่ตอบ', score: 0 }
    ]
  },

  maxScore: 2
});
