/* ข้อสอบชุดที่ 2 ข้อที่ 58  |  ประเภท: เขียนตอบสั้น  |  กระบวนการ: ให้เหตุผลทางคณิตศาสตร์, คิด/แปลงปัญหา */
registerQuestion({
  id: 58,
  theme: { emoji: '🔐', color: '#4338ca' },

  part1: { type: 'short', processes: ['reason', 'think'] },

  part2: {
    title: 'รหัสตู้ล็อกเกอร์ห้องสมุด',
    scenarioHtml: `
      <p>ตู้ล็อกเกอร์ในห้องสมุดของโรงเรียนใช้รหัส <b>4 หลัก</b> แต่ละหลักเป็นเลขโดด 0 – 9 (หลักแรกเป็น 0 ได้)
      ระบบกำหนดเงื่อนไขในการตั้งรหัสว่า</p>
      <ul>
        <li>เลขโดดทั้ง 4 หลักต้อง<b>ไม่ซ้ำกัน</b></li>
        <li>ผลบวกของเลขโดดทั้ง 4 หลักต้อง<b>เท่ากับ 10</b></li>
      </ul>
      <div data-track="ภาพล็อกเกอร์" style="display:flex;justify-content:center;margin:14px 0 6px">
        <div style="display:inline-flex;align-items:center;gap:10px;padding:14px 18px;border-radius:16px;background:linear-gradient(180deg,#e0e7ff,#c7d2fe);border:2px solid #6366f1">
          <span style="font-size:30px" aria-hidden="true">🔒</span>
          <span style="display:inline-flex;gap:6px" aria-label="ช่องรหัส 4 หลัก">
            <span style="width:42px;height:54px;border-radius:10px;background:#fff;border:2px solid #4338ca;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:#4338ca">?</span>
            <span style="width:42px;height:54px;border-radius:10px;background:#fff;border:2px solid #4338ca;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:#4338ca">?</span>
            <span style="width:42px;height:54px;border-radius:10px;background:#fff;border:2px solid #4338ca;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:#4338ca">?</span>
            <span style="width:42px;height:54px;border-radius:10px;background:#fff;border:2px solid #4338ca;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:#4338ca">?</span>
          </span>
        </div>
      </div>`,
    askHtml: `<p><b>รหัสที่ตั้งได้ตามเงื่อนไขมีทั้งหมดกี่รหัส</b></p>`,
    sourceHtml: '',

    /* เขียนตอบสั้น: ตรวจด้วยการจับคู่ตัวเลข (ไม่ใช้ AI) */
    answer: {
      type: 'short',
      fields: [
        { id: 'codes', label: 'จำนวนรหัสที่ตั้งได้ทั้งหมด', unit: 'รหัส', accept: [120], tol: 0 }
      ],
      scoring: [[1, 1]]
    },
    workings: true,
    mathPad: {
      chips: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '{ , , , }', '4!', '24', '10'],
      phrases: ['กรณีมี 0: ', 'กรณีไม่มี 0: ', 'จำนวนเซตทั้งหมด = ', 'แต่ละเซตเรียงสับเปลี่ยนได้ ', 'จำนวนรหัส = '],
      calculator: true,
      placeholder: 'เช่น\nกรณีมี 0: {0, 1, 2, 7}, ...\nกรณีไม่มี 0: ...\nแต่ละเซตเรียงสับเปลี่ยนได้ ... แบบ'
    }
  },

  part3: {
    answerHtml: `
      <p><b>ตอบ 120 รหัส</b></p>
      <p><b>แนวคิด</b></p>
      <p>หาเซตของเลขโดด 4 ตัวที่ต่างกันและผลบวกเป็น 10 (เรียงจากน้อยไปมาก)</p>
      <ul>
        <li>กรณีมี 0: {0, 1, 2, 7}, {0, 1, 3, 6}, {0, 1, 4, 5}, {0, 2, 3, 5}</li>
        <li>กรณีไม่มี 0: {1, 2, 3, 4}</li>
      </ul>
      <p>(ตรวจสอบ: ถ้าไม่มี 0 ผลบวกน้อยสุดคือ 1 + 2 + 3 + 4 = 10 จึงมีเพียงเซตเดียว)</p>
      <p>รวม 5 เซต แต่ละเซตเรียงสับเปลี่ยนได้ 4! = 24 แบบ</p>
      <p>จำนวนรหัส = 5 × 24 = <b>120 รหัส</b></p>`,
    rubric: [
      { text: 'ตอบ 120 รหัส', score: 1 },
      { text: 'ตอบคำตอบอื่น ๆ หรือไม่ตอบ', score: 0 }
    ]
  },

  maxScore: 1
});
