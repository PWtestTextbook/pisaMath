/* ข้อสอบชุดที่ 2 ข้อที่ 48  |  ประเภท: เขียนตอบสั้น  (ภาพในแนวการตอบ: img/q48-hint-grid.jpg) */
registerQuestion({
  id: 48,
  theme: { emoji: '🤖', color: '#0369a1' },
  part1: { type: 'short', processes: ['use'] },
  part2: {
    title: 'พื้นสถานีชาร์จหุ่นยนต์',
    scenarioHtml: (function () {
      var grid = function (n) {
        var c = '';
        for (var i = 0; i < n * n; i++) c += '<i style="width:14px;height:14px;background:#93c5fd;border:1px solid #1e3a8a;display:block"></i>';
        return '<div data-track="ภาพแบบ ' + n + '×' + n + '" style="display:inline-block;margin:6px 10px;text-align:center;vertical-align:bottom">' +
          '<div style="display:grid;grid-template-columns:repeat(' + n + ',14px);gap:1px;justify-content:center">' + c + '</div>' +
          '<div class="small">แบบ ' + n + ' × ' + n + '<br>' + (n * n) + ' แผ่น</div></div>';
      };
      return `
      <p>บริษัทแห่งหนึ่งกำลังออกแบบ สถานีชาร์จหุ่นยนต์ส่งของอัตโนมัติ โดยใช้แผ่นพื้นรูปสี่เหลี่ยมจัตุรัสขนาดเท่ากันในการกำหนดตำแหน่งจอดหุ่นยนต์</p>
      <p>การจัดตำแหน่งแบบ “บล็อก” หมายถึง การจัดให้มีจำนวนแถวเท่ากับจำนวนตำแหน่งในแต่ละแถว ดังภาพ</p>
      <div style="text-align:center;background:#fff;border-radius:14px;padding:6px">${grid(2)}${grid(3)}${grid(4)}${grid(5)}</div>
      <p data-track="ข้อมูลแผ่นพื้น">บริษัทมีแผ่นพื้นทั้งหมด <b>350 แผ่น</b> แต่กำหนดให้ <b>10%</b> ของแผ่นพื้นต้องสำรองไว้สำหรับเปลี่ยนแผ่นที่ชำรุด
      จึงไม่สามารถนำแผ่นทั้งหมดมาใช้สร้างสถานีได้</p>
      <p data-track="เงื่อนไขทางเดิน">นอกจากนี้ สถานีต้องมีพื้นที่สำหรับ<b>ทางเดินรอบนอกอีก 1 แถวของแผ่นพื้นทุกด้าน</b> โดยทางเดินนี้ไม่นับเป็นตำแหน่งจอดหุ่นยนต์</p>`;
    })(),
    askHtml: `<p><b>บริษัทสามารถสร้างสถานีที่สามารถรองรับหุ่นยนต์ได้มากที่สุดกี่ตัว หากกำหนดให้ 1 แผ่น สามารถจอดหุ่นยนต์ได้ 1 ตัว</b></p>`,
    sourceHtml: '',
    answer: { type: 'short', fields: [{ id: 'robots', label: 'รองรับหุ่นยนต์ได้มากที่สุด', unit: 'ตัว', accept: [225], tol: 0 }], scoring: [[1, 1]] },
    workings: true,
    mathPad: { chips: ['350', '10%', 'n', '²', '≤', '≥'], phrases: ['ใช้ได้ ', 'ถ้า n = ', 'รวมทางเดิน ', 'จอดได้ '], calculator: true,
               placeholder: 'ทดเลขได้ เช่น\nแผ่นที่ใช้ได้ = ...' }
  },
  part3: {
    answerHtml: `
      <p><b>ตอบ 225 ตัว</b></p>
      <p style="text-align:center"><img src="questions/set2/img/q48-hint-grid.jpg" alt="ตารางแผ่นพื้น 17 × 17 แผ่น มีพื้นที่จอด 15 × 15 ตรงกลาง และทางเดินรอบนอก 1 แถว" style="max-width:100%;width:380px;border-radius:12px;background:#fff"></p>
      <p>แผ่นที่ใช้ได้ 90% × 350 = 315 แผ่น</p>
      <p>ถ้าพื้นที่จอดเป็น <i>n</i> × <i>n</i> รวมทางเดินรอบนอกจะใช้ (<i>n</i> + 2)² แผ่น ต้องได้ (<i>n</i> + 2)² ≤ 315</p>
      <p><i>n</i> = 15: 17² = 289 ≤ 315 ✓ · <i>n</i> = 16: 18² = 324 &gt; 315 ✘</p>
      <p>ดังนั้น จอดได้มากที่สุด 15 × 15 = <b>225 ตัว</b></p>`,
    rubric: [{ text: 'ตอบว่า 225 ตัว', score: 1 }, { text: 'ตอบคำตอบอื่น หรือ ไม่ตอบ', score: 0 }]
  },
  maxScore: 1
});
