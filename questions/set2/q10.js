/* ข้อสอบชุดที่ 2 ข้อที่ 10  |  ประเภท: เลือกตอบ  (การ์ดช่วงเส้นทาง + แถบแบตเตอรี่ วาดด้วย HTML) */
registerQuestion({
  id: 10,
  theme: { emoji: '🚁', color: '#16a34a' },

  part1: { type: 'mc', processes: ['use'] },

  part2: {
    title: 'โดรนส่งยา',
    scenarioHtml: (function () {
      var card = function (ic, name, km, note, track) {
        return '<div data-track="' + track + '" style="flex:1 1 150px;background:var(--surface);border:2px solid var(--line);border-radius:16px;padding:10px 12px;text-align:center">' +
          '<div style="font-size:30px;line-height:1.2">' + ic + '</div><div style="font-family:var(--fun);font-weight:700">' + name + '</div>' +
          '<div style="font:700 22px var(--fun);color:var(--qc)">' + km + ' กม.</div><div class="small">' + note + '</div></div>';
      };
      return `
      <p>โรงพยาบาลแห่งหนึ่งกำลังทดลองใช้โดรนขนาดเล็กสำหรับส่งยาฉุกเฉินไปยังศูนย์สุขภาพชุมชนที่อยู่ห่างออกไป
      โดยโดรนสามารถบินได้ทั้งในพื้นที่ราบและพื้นที่ลาดชัน จากการทดสอบพบว่า เมื่อบินในสภาพอากาศปกติ
      <b>โดรนใช้พลังงานแบตเตอรี่ประมาณ 1% ต่อระยะทาง 0.32 กิโลเมตร</b> อย่างไรก็ตาม การบินในสภาพพื้นที่ต่างกันทำให้การใช้พลังงานเปลี่ยนแปลง ดังนี้</p>
      <ul data-track="เงื่อนไขพลังงานขึ้น/ลงเนิน">
        <li>ช่วงที่บิน <b>ขึ้นเนิน</b> โดรนใช้พลังงาน<b>มากกว่า</b>ปกติ 25%</li>
        <li>ช่วงที่บิน <b>ลงเนิน</b> โดรนใช้พลังงาน<b>น้อยกว่า</b>ปกติ 10%</li>
      </ul>
      <p data-track="เงื่อนไขแบตสำรอง 15%">โรงพยาบาลกำหนดให้โดรนต้อง<b>เหลือแบตเตอรี่อย่างน้อย 15%</b> เมื่อเดินทางถึงปลายทาง เพื่อสำรองพลังงานสำหรับเหตุฉุกเฉิน</p>
      <p>โดรนต้องทำภารกิจส่งยาในเส้นทางหนึ่งมีระยะทางทั้งหมด <b>24 กิโลเมตร</b> ประกอบด้วย</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin:8px 0">
        ${card('➖', 'พื้นที่ราบ', 10, 'ใช้พลังงานปกติ', 'ช่วงพื้นที่ราบ 10 กม.')}
        ${card('⛰️', 'ช่วงขึ้นเนิน', 8, 'มากกว่าปกติ 25%', 'ช่วงขึ้นเนิน 8 กม.')}
        ${card('🛝', 'ช่วงลงเนิน', 6, 'น้อยกว่าปกติ 10%', 'ช่วงลงเนิน 6 กม.')}
      </div>
      <div data-track="แถบแบตเตอรี่" aria-label="แถบแบตเตอรี่ 0 ถึง 100 เปอร์เซ็นต์ มีเส้นสำรองที่ 15 เปอร์เซ็นต์"
        style="position:relative;height:30px;border:2px solid var(--ink);border-radius:8px;margin:18px 6px 26px;background:linear-gradient(90deg,#fecaca 0 15%,#bbf7d0 15% 100%)">
        <span style="position:absolute;left:15%;top:-4px;bottom:-4px;border-left:3px dashed #dc2626"></span>
        <span class="small" style="position:absolute;left:0;top:30px">0%</span>
        <span class="small" style="position:absolute;left:15%;top:30px;transform:translateX(-50%);color:#dc2626;font-weight:600">สำรอง 15%</span>
        <span class="small" style="position:absolute;right:0;top:30px">100%</span>
        <span style="position:absolute;inset:0;display:grid;place-items:center;font:600 14px var(--fun);color:#14532d">🔋 แบตเตอรี่เต็มก่อนออกบิน</span>
      </div>`;
    })(),
    askHtml: `<p><b>หลังจากบินตามเส้นทางดังกล่าวแล้ว โดรนสามารถเพิ่มระยะทางในพื้นที่ราบได้อีกมากที่สุดเท่าใด
      โดยยังคงเหลือแบตเตอรี่ไม่น้อยกว่า 15%</b></p>`,
    sourceHtml: '',

    answer: {
      type: 'mc',
      options: ['0.9 กิโลเมตร', '1.2 กิโลเมตร', '1.8 กิโลเมตร', '2.4 กิโลเมตร', '3.0 กิโลเมตร'],
      correct: 3
    },
    workings: true,
    mathPad: {
      chips: ['10', '8', '6', '0.32', '25%', '10%', '15%', '100%'],
      phrases: ['พื้นที่ราบ ', 'ขึ้นเนิน ', 'ลงเนิน ', 'เทียบเท่าพื้นราบ ', 'ใช้แบต ', 'เหลือแบต '],
      calculator: true,
      placeholder: 'ทดเลขได้ เช่น\nพื้นที่ราบ 10 กม. ใช้แบต = ...\n...'
    }
  },

  part3: {
    answerHtml: `
      <p><b>ตอบ 3. 1.8 กิโลเมตร</b></p>
      <p><b>แนวคิด</b> แปลงแต่ละช่วงเป็น "ระยะทางเทียบเท่าพื้นที่ราบ"</p>
      <ul>
        <li>พื้นที่ราบ 10 กม. เทียบเท่า 10 กม.</li>
        <li>ขึ้นเนิน 8 กม. ใช้พลังงานมากกว่าปกติ 25% เทียบเท่า (125/100) × 8 = 10 กม.</li>
        <li>ลงเนิน 6 กม. ใช้พลังงานน้อยกว่าปกติ 10% เทียบเท่า (90/100) × 6 = 5.4 กม.</li>
      </ul>
      <p>ระยะทางเทียบเท่าพื้นที่ราบทั้งหมด 10 + 10 + 5.4 = 25.4 กม.</p>
      <p>ระยะทาง 0.32 กม. ใช้แบตเตอรี่ 1% ดังนั้น 25.4 กม. ใช้แบตเตอรี่ 25.4 ÷ 0.32 = 79.375%</p>
      <p>เหลือแบตเตอรี่ 100 − 79.375 = 20.625% แต่ต้องสำรองไว้ 15% จึงใช้เพิ่มได้ 20.625 − 15 = 5.625%</p>
      <p>แบตเตอรี่ 5.625% บินในพื้นที่ราบได้ 5.625 × 0.32 = <b>1.8 กม.</b></p>`,
    rubric: [
      { text: 'ตอบตัวเลือก 3.', score: 1 },
      { text: 'ตอบตัวเลือกอื่น ๆ หรือไม่ตอบ', score: 0 }
    ]
  },

  maxScore: 1
});
