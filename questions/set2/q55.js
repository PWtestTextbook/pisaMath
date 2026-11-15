/* ข้อสอบชุดที่ 2 ข้อที่ 55  |  ประเภท: เลือกตอบ  (ป้ายอัตราค่าจอดเป็น HTML ในไฟล์นี้) */
registerQuestion({
  id: 55,
  theme: { emoji: '🅿️', color: '#1d4ed8' },
  part1: { type: 'mc', processes: ['reason'] },
  part2: {
    title: 'จอดรถอย่างไรให้คุ้มที่สุด?',
    scenarioHtml: `
      <p>ห้างสรรพสินค้า เมโทรสแควร์ ต้องการส่งเสริมให้ลูกค้าซื้อสินค้าภายในห้าง จึงกำหนดอัตราค่าจอดรถและส่วนลดสำหรับลูกค้า ดังนี้</p>
      <div data-track="ป้ายอัตราค่าจอดรถ" style="max-width:640px;margin:10px auto 16px;border-radius:18px;overflow:hidden;border:3px solid #1d4ed8;background:#fff;box-shadow:0 6px 16px rgba(29,78,216,.15);color:#1f2937"><div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:linear-gradient(135deg,#1d4ed8,#7c3aed);color:#fff"><div style="width:52px;height:52px;border-radius:12px;background:#fff;color:#1d4ed8;font:900 34px/52px sans-serif;text-align:center">P</div><div style="font-weight:800;font-size:22px">อัตราค่าจอดรถ ห้างเมโทรสแควร์ 🚗</div></div><table style="width:100%;border-collapse:collapse;font-size:16.5px;text-align:center"><tr><th colspan="2" style="background:#dbeafe;color:#1e3a8a;padding:8px 12px;text-align:left">🅿️ อัตราค่าจอดรถ</th></tr><tr style="background:#fff"><td style="padding:9px 12px;text-align:left">• ไม่เกิน 45 นาที</td><td style="padding:9px 12px;font-weight:700"><span style="color:#16a34a">ฟรี</span></td></tr><tr style="background:#f8fafc"><td style="padding:9px 12px;text-align:left">• เกิน 45 นาที แต่ไม่เกิน 2 ชั่วโมง</td><td style="padding:9px 12px;font-weight:700">20 บาท</td></tr><tr style="background:#fff"><td style="padding:9px 12px;text-align:left">• เกิน 2 ชั่วโมง แต่ไม่เกิน 4 ชั่วโมง</td><td style="padding:9px 12px;font-weight:700">45 บาท</td></tr><tr style="background:#f8fafc"><td style="padding:9px 12px;text-align:left">• เกิน 4 ชั่วโมง</td><td style="padding:9px 12px;font-weight:700">คิดเพิ่ม 40 บาทต่อชั่วโมงหรือเศษของชั่วโมง</td></tr><tr><td colspan="2" style="padding:8px 12px;text-align:left;background:#fef9c3;font-size:15px"><b>หมายเหตุ :</b> เศษของชั่วโมงหลัง 4 ชั่วโมง คิดเป็น 1 ชั่วโมงเต็ม</td></tr><tr><th colspan="2" style="background:#fce7f3;color:#9d174d;padding:8px 12px;text-align:left">🛍️ ส่วนลดจากการซื้อสินค้า</th></tr><tr style="background:#fff"><td style="padding:9px 12px;text-align:left">• ซื้อครบ 1,000 บาท แต่ไม่ถึง 2,000 บาท</td><td style="padding:9px 12px;font-weight:700"><span style="color:#be185d">ลดค่าจอด 30 บาท</span></td></tr><tr style="background:#fdf2f8"><td style="padding:9px 12px;text-align:left">• ซื้อครบ 2,000 บาทขึ้นไป</td><td style="padding:9px 12px;font-weight:700"><span style="color:#be185d">ลดค่าจอด 70 บาท</span></td></tr><tr><td colspan="2" style="padding:8px 12px;text-align:left;font-size:15px">• ส่วนลดไม่สามารถทำให้ค่าจอดรถติดลบได้</td></tr></table></div>
      <p data-track="สถานการณ์ครอบครัว">วันเสาร์ ครอบครัวหนึ่งนำรถเข้าห้างเวลา <b>10.35 น.</b> ครอบครัวต้องการซื้อของใช้ภายในบ้าน โดยขณะนี้มีสินค้าในรถเข็นราคา <b>1,950 บาท</b>
      พนักงานแจ้งว่า หากซื้อสินค้าเพิ่มอีกเล็กน้อยจนยอดซื้อครบ 2,000 บาท จะได้รับส่วนลดค่าจอดรถเพิ่มจาก 30 บาทเป็น 70 บาท
      ครอบครัวคาดว่าจะออกจากห้างเวลา <b>15.55 น.</b></p>
      <p>ก่อนจ่ายเงิน ครอบครัวจึงพิจารณาว่า “ควรซื้อสินค้าเพิ่มอีก 50 บาท เพื่อให้ได้ส่วนลดค่าจอดรถเพิ่มขึ้นหรือไม่?”</p>`,
    askHtml: `<p><b>ข้อใดกล่าวถูกต้อง</b></p>`,
    sourceHtml: '',
    answer: {
      type: 'mc',
      options: [
        'ไม่ควรซื้อเพิ่ม เพราะการซื้อเพิ่ม 50 บาท ทำให้ประหยัดค่าจอดรถเพียง 30 บาท',
        'ไม่ควรซื้อเพิ่ม เพราะการซื้อเพิ่ม 50 บาท ทำให้ประหยัดค่าจอดรถเพียง 40 บาท แต่ต้องจ่ายเงินรวมทั้งค่าสินค้าและค่าจอดรถ เพิ่มขึ้น 10 บาท',
        'ควรซื้อเพิ่ม เพราะการซื้อเพิ่ม 50 บาท ทำให้ประหยัดค่าจอดรถ 40 บาท และจ่ายเงินเพิ่มเพียง 10 บาท',
        'ควรซื้อเพิ่ม เพราะการซื้อเพิ่ม 50 บาท ทำให้ค่าจอดรถลดลง 70 บาท จึงประหยัดเงินสุทธิ 20 บาท',
        'ควรซื้อเพิ่ม เพราะเมื่อซื้อสินค้า 2,000 บาท จะไม่ต้องเสียค่าจอดรถเลย'
      ],
      correct: 2
    },
    workings: true,
    mathPad: { chips: ['45', '40', '30', '70', '1,950', '2,000'], phrases: ['เวลาจอด ', 'ค่าจอด ', 'หลังส่วนลด ', 'จ่ายรวม '], calculator: true,
               placeholder: 'ทดเลขได้ เช่น\nเวลาจอด 10.35 – 15.55 = ...' }
  },
  part3: {
    answerHtml: `
      <p><b>ตอบ 2. ไม่ควรซื้อเพิ่ม เพราะประหยัดค่าจอดรถเพียง 40 บาท แต่จ่ายรวมเพิ่มขึ้น 10 บาท</b></p>
      <p>เวลาจอด 10.35 – 15.55 น. = 5 ชั่วโมง 20 นาที</p>
      <p>ค่าจอด: 4 ชั่วโมงแรก 45 บาท ส่วนเกิน 1 ชั่วโมง 20 นาที คิดเป็น 2 ชั่วโมง × 40 = 80 บาท รวม 125 บาท</p>
      <p>ซื้อ 1,950 บาท: ลด 30 บาท จ่ายค่าจอด 95 บาท รวม 1,950 + 95 = 2,045 บาท</p>
      <p>ซื้อ 2,000 บาท: ลด 70 บาท จ่ายค่าจอด 55 บาท รวม 2,000 + 55 = 2,055 บาท</p>
      <p>ประหยัดค่าจอด 95 − 55 = 40 บาท แต่จ่ายรวมมากขึ้น 2,055 − 2,045 = <b>10 บาท</b></p>`,
    rubric: [{ text: 'ตอบตัวเลือก 2.', score: 1 }, { text: 'ตอบตัวเลือกอื่น ๆ หรือไม่ตอบ', score: 0 }]
  },
  maxScore: 1
});
