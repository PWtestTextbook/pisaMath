/* ข้อสอบชุดที่ 2 ข้อที่ 45  |  ประเภท: เขียนตอบสั้น */
registerQuestion({
  id: 45,
  theme: { emoji: '🥬', color: '#22c55e' },
  part1: { type: 'short', processes: ['use'] },
  part2: {
    title: 'ค่าไฟฟ้าของฟาร์มผัก',
    scenarioHtml: `
      <p>โรงเรียนแห่งหนึ่งจัดทำ ฟาร์มผักแนวตั้งอัจฉริยะ (Smart Vertical Farm) เพื่อให้นักเรียนเรียนรู้เกี่ยวกับเทคโนโลยีการเกษตรสมัยใหม่
      โดยปลูกผักสลัดในชั้นปลูกหลายระดับภายในห้องควบคุมสภาพแวดล้อม ระบบปลูกผักใช้ หลอดไฟ LED เพื่อให้แสงแก่พืชในช่วงเวลาที่กำหนด
      และใช้ปั๊มน้ำหมุนเวียนสารละลายธาตุอาหารไปยังรางปลูก</p>
      <p>โรงเรียนกำหนดให้ระบบทำงานเป็นเวลา <b>30 วัน</b> โดยมีข้อมูลดังนี้</p>
      <div data-track="ข้อมูลอุปกรณ์" style="display:flex;gap:12px;flex-wrap:wrap;margin:10px 0 14px"><div style="flex:1;min-width:180px;border-radius:16px;padding:12px 14px;background:linear-gradient(160deg,#fef9c3,#fde68a);color:#1f2937;box-shadow:0 4px 12px rgba(0,0,0,.08)"><div style="font-size:30px">💡</div><div style="font-weight:800;font-size:18px;margin:2px 0 6px">หลอดไฟ LED</div><div style="font-size:15.5px;line-height:1.6">จำนวน <b>12 หลอด</b></div><div style="font-size:15.5px;line-height:1.6">หลอดละ <b>40 วัตต์</b></div><div style="font-size:15.5px;line-height:1.6">เปิดวันละ <b>12 ชั่วโมง</b></div></div><div style="flex:1;min-width:180px;border-radius:16px;padding:12px 14px;background:linear-gradient(160deg,#e0f2fe,#bae6fd);color:#1f2937;box-shadow:0 4px 12px rgba(0,0,0,.08)"><div style="font-size:30px">💧</div><div style="font-weight:800;font-size:18px;margin:2px 0 6px">ปั๊มน้ำ</div><div style="font-size:15.5px;line-height:1.6">กำลังไฟฟ้า <b>120 วัตต์</b></div><div style="font-size:15.5px;line-height:1.6">ทำงานวันละ <b>8 ชั่วโมง</b></div></div><div style="flex:1;min-width:180px;border-radius:16px;padding:12px 14px;background:linear-gradient(160deg,#dcfce7,#bbf7d0);color:#1f2937;box-shadow:0 4px 12px rgba(0,0,0,.08)"><div style="font-size:30px">⚡</div><div style="font-weight:800;font-size:18px;margin:2px 0 6px">ค่าไฟฟ้า</div><div style="font-size:15.5px;line-height:1.6">เฉลี่ย <b>4 บาทต่อหน่วย</b></div><div style="font-size:15.5px;line-height:1.6">1 หน่วย = 1 กิโลวัตต์-ชั่วโมง</div></div></div><p style="text-align:center;font-size:44px;letter-spacing:6px;margin:0 0 8px" aria-hidden="true">🥬🌱🥬🌱🥬</p>
      <p class="small">กำหนดให้ 1 กิโลวัตต์ = 1,000 วัตต์</p>`,
    askHtml: `<p><b>ถ้าโรงเรียนใช้ระบบดังกล่าวตลอด 30 วัน ค่าไฟฟ้าสำหรับหลอดไฟ LED และปั๊มน้ำรวมกันประมาณกี่บาท</b></p>`,
    sourceHtml: '',
    answer: { type: 'short', fields: [{ id: 'baht', label: 'ค่าไฟฟ้ารวม', unit: 'บาท', accept: [806.4], tol: 0.01, placeholder: '0.00' }], scoring: [[1, 1]] },
    workings: true,
    mathPad: { chips: ['30', '12', '40', '120', '8', '4', '1,000'], phrases: ['หลอดไฟ ', 'ปั๊มน้ำ ', 'รวม ', 'หน่วย ', 'ค่าไฟ '],
               calculator: true, placeholder: 'ทดเลขได้ เช่น\nหลอดไฟ 30 วัน = ...' }
  },
  part3: {
    answerHtml: `
      <p><b>ตอบ 806.40 บาท</b></p>
      <p>หลอดไฟ: 30 × 12 × 12 × 40 = 172,800 วัตต์-ชั่วโมง</p>
      <p>ปั๊มน้ำ: 30 × 8 × 120 = 28,800 วัตต์-ชั่วโมง</p>
      <p>รวม 201,600 วัตต์-ชั่วโมง = 201.6 กิโลวัตต์-ชั่วโมง (หน่วย)</p>
      <p>ค่าไฟฟ้า 201.6 × 4 = <b>806.40 บาท</b></p>`,
    note: 'ต้นฉบับใช้หน่วย "วัตต์" และ "บาทต่อกิโลวัตต์" ระบบปรับเป็น วัตต์-ชั่วโมง และ บาทต่อหน่วย (กิโลวัตต์-ชั่วโมง) ให้ถูกต้องตามหลักพลังงานไฟฟ้า คำตอบไม่เปลี่ยน',
    rubric: [{ text: 'ตอบว่า 806.40 บาท', score: 1 }, { text: 'ตอบคำตอบอื่น หรือ ไม่ตอบ', score: 0 }]
  },
  maxScore: 1
});
