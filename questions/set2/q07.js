/* ข้อสอบชุดที่ 2 ข้อที่ 7  |  ประเภท: อธิบายหรือแสดงวิธีทำ (ตอบเลข + แสดงวิธีหา Check Digit) */
registerQuestion({
  id: 7,
  theme: { emoji: '🔐', color: '#0891b2' },

  part1: { type: 'explain', processes: ['use'] },

  part2: {
    title: 'ตู้รับฝากสัมภาระอัจฉริยะ (Smart Locker)',
    scenarioHtml: (function () {
      /* แสดงรหัสที่พิมพ์ได้เป็นช่องตัวเลข (ช่องสุดท้ายหายไป) */
      var code = '27105483012'.split('').concat(['□']);
      var boxes = code.map(function (d, i) {
        var miss = d === '□';
        return '<span data-track="รหัสหลักที่ ' + (i + 1) + '" style="display:inline-grid;place-items:center;width:38px;height:46px;margin:2px;border-radius:10px;' +
          'font:700 24px/1 var(--read);border:2px ' + (miss ? 'dashed var(--qc);color:var(--qc)' : 'solid var(--line);background:var(--surface)') + '">' + (miss ? '?' : d) + '</span>';
      }).join('');
      return `
      <p>สถานีขนส่งแห่งหนึ่งติดตั้ง ตู้รับฝากสัมภาระอัจฉริยะ (Smart Locker) เพื่อให้ผู้โดยสารสามารถฝากกระเป๋าและรับคืนได้ด้วยตนเอง
      ระบบจะสร้างรหัสประจำรายการฝากสัมภาระ <b>12 หลัก</b> สำหรับแต่ละรายการ รหัสแต่ละหลักมีความหมายดังนี้</p>
      <div class="table-scroll"><table class="data">
        <thead><tr><th>ตำแหน่ง</th><th>จำนวนหลัก</th><th>ความหมาย</th></tr></thead>
        <tbody>
          <tr data-track="ตาราง: ตำแหน่ง 1–2"><td>1 – 2</td><td>2 หลักแรก</td><td class="l">รหัสพื้นที่ของสถานี</td></tr>
          <tr data-track="ตาราง: ตำแหน่ง 3–5"><td>3 – 5</td><td>3 หลักถัดมา</td><td class="l">รหัสหมายเลขตู้</td></tr>
          <tr data-track="ตาราง: ตำแหน่ง 6–9"><td>6 – 9</td><td>4 หลักถัดมา</td><td class="l">หมายเลขรายการฝากสัมภาระ</td></tr>
          <tr data-track="ตาราง: ตำแหน่ง 10–11"><td>10 – 11</td><td>2 หลักถัดมา</td><td class="l">รหัสรอบการให้บริการ</td></tr>
          <tr data-track="ตาราง: ตำแหน่ง 12"><td>12</td><td>1 หลักสุดท้าย</td><td class="l">ตัวตรวจสอบความถูกต้อง (Check Digit)</td></tr>
        </tbody>
      </table></div>
      <p><b>ระบบกำหนดวิธีหาตัวตรวจสอบดังนี้</b></p>
      <ol data-track="วิธีหา Check Digit">
        <li>นำผลรวมของเลขในตำแหน่ง 1, 4, 7 และ 10 คูณด้วย 3</li>
        <li>นำผลรวมของเลขในตำแหน่ง 2, 5, 8 และ 11 คูณด้วย 2</li>
        <li>นำผลรวมของเลขในตำแหน่ง 3, 6 และ 9 มาบวกเพิ่ม</li>
        <li>นำผลรวมทั้งหมดที่ได้หารด้วย 10 แล้วหา <b>เศษ</b></li>
        <li>ตัวตรวจสอบ (Check Digit) คือ จำนวนที่ต้องบวกกับเศษนั้นจึงจะได้ 10</li>
        <li>ถ้าเศษเป็น 0 ให้ Check Digit เป็น 0</li>
      </ol>
      <p data-track="ตัวอย่างการหา Check Digit"><b>ตัวอย่าง</b> หากผลรวมตามข้อ 1–3 ได้ 89 &nbsp;→&nbsp; 89 ÷ 10 มีเศษ 9
      &nbsp;→&nbsp; 10 − 9 = 1 จะได้ว่า Check Digit คือ 1</p>
      <p>พนักงานกำลังตรวจสอบรายการฝากสัมภาระรายการหนึ่ง พบข้อมูลดังนี้</p>
      <ul data-track="ข้อมูลรายการฝาก">
        <li>สถานีอยู่ในพื้นที่รหัส 27</li>
        <li>ใช้ตู้หมายเลข 105</li>
        <li>หมายเลขรายการฝากสัมภาระคือ 4830</li>
        <li>เป็นรอบการให้บริการที่ 12</li>
      </ul>
      <p>แต่เครื่องพิมพ์เกิดปัญหา ทำให้ตัวเลขตัวสุดท้ายของรหัสหายไป พนักงานพบรหัสที่พิมพ์ได้ว่า</p>
      <div style="text-align:center;margin:8px 0" aria-label="รหัส 27105483012 ตามด้วยช่องว่าง">${boxes}</div>`;
    })(),
    askHtml: `<p><b>จงหาว่า □ คือเลขใด พร้อมแสดงวิธีหา</b></p>`,
    sourceHtml: '',

    answer: {
      type: 'explain',
      fields: [{ id: 'digit', label: '□ คือเลข', accept: [8], tol: 0, placeholder: '?' }],
      scoring: [[1, 1]]
    },
    workings: true,
    mathPad: {
      chips: ['× 3', '× 2', '÷ 10', 'เศษ', '10 − '],
      phrases: ['ตำแหน่ง 1, 4, 7, 10: ', 'ตำแหน่ง 2, 5, 8, 11: ', 'ตำแหน่ง 3, 6, 9: ', 'ผลรวมทั้งหมด ', 'Check Digit คือ '],
      calculator: true,
      placeholder: 'แสดงวิธีหา เช่น\nตำแหน่ง 1, 4, 7, 10: (… + … + … + …) × 3 = ...\n...'
    }
  },

  /* 2 = ตอบ 8 และวิธีทำมีผลรวม 72 พร้อมผลรวมย่อย 33 หรือ 34 (และไม่มีบรรทัดที่คำนวณผิด)
     1 = ตอบ 8 แต่วิธีทำไม่ครบ/ไม่ถูก   0 = อื่น ๆ */
  grade(resp, h) {
    const w = resp.workings || '';
    const ansOk = h.parseNum(resp.values.digit) === 8;
    const step12 = h.hasNumber(w, 33) || h.hasNumber(w, 34);
    const sum72 = h.hasNumber(w, 72);
    const noBad = h.check(w).checkedBad === 0;
    const reasonOk = step12 && sum72 && noBad;
    return {
      score: ansOk ? (reasonOk ? 2 : 1) : 0, max: 2, total: 4,
      items: [ansOk, step12, sum72, noBad], correctCount: [ansOk, step12, sum72, noBad].filter(Boolean).length,
      notes: [
        { ok: ansOk, text: 'คำตอบ: □ คือ 8' },
        { ok: step12, text: 'วิธีทำ: หาผลรวมตามขั้นที่ 1–2 ได้ 33 และ/หรือ 34' },
        { ok: sum72, text: 'วิธีทำ: ผลรวมทั้งหมดได้ 72 (หาร 10 เหลือเศษ 2 → 10 − 2 = 8)' },
        { ok: noBad, text: 'ไม่มีบรรทัดที่ระบบเช็กแล้วคำนวณไม่ตรง' }
      ],
      review: 'ส่วนวิธีทำตรวจอัตโนมัติจากตัวเลขสำคัญ ครูอาจปรับคะแนนหลังอ่านวิธีทำ'
    };
  },

  part3: {
    answerHtml: `
      <p><b>ตอบ 8</b></p>
      <p><b>แนวคิด</b> จากรหัส 27105483012□ ระบุเลขโดดแต่ละหลักได้ดังนี้</p>
      <div class="table-scroll"><table class="data">
        <tr><th>หลักที่</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
        <tr><th>เลขโดด</th><td>2</td><td>7</td><td>1</td><td>0</td><td>5</td><td>4</td><td>8</td><td>3</td><td>0</td><td>1</td><td>2</td><td>□</td></tr>
      </table></div>
      <ul>
        <li>ตำแหน่ง 1, 4, 7, 10: (2 + 0 + 8 + 1) × 3 = 33</li>
        <li>ตำแหน่ง 2, 5, 8, 11: (7 + 5 + 3 + 2) × 2 = 34</li>
        <li>บวกเลขตำแหน่ง 3, 6, 9: 33 + 34 + 1 + 4 + 0 = 72</li>
        <li>72 ÷ 10 เหลือเศษ 2</li>
        <li>Check Digit คือจำนวนที่บวกกับ 2 แล้วได้ 10 นั่นคือ 10 − 2 = <b>8</b></li>
      </ul>`,
    rubric: [
      { text: 'ตอบ 8 และมีการอธิบายเหตุผลประกอบอย่างถูกต้อง', score: 2 },
      { text: 'ตอบ 8 แต่ไม่ได้อธิบายเหตุผลประกอบ หรืออธิบายแต่ไม่ถูกต้อง', score: 1 },
      { text: 'คำตอบอื่น ๆ หรือไม่ตอบ', score: 0 }
    ]
  },

  maxScore: 2
});
