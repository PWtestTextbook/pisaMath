/* ข้อสอบชุดที่ 2 ข้อที่ 53  |  ประเภท: เขียนตอบสั้น (เขียนระบบสมการ)
   การตรวจ: แปลงสมการที่พิมพ์เป็นสัมประสิทธิ์ (a, b, c) ของ ax + by = c แล้วเทียบกับสมการเฉลยแบบ "เป็นพหุคูณกัน"
   จึงยอมรับรูปที่สมมูลกัน เช่น y + x = 180, 2x + 2y = 360, x = 180 − y */
registerQuestion({
  id: 53,
  theme: { emoji: '🍙', color: '#dc2626' },
  part1: { type: 'short', processes: ['think'] },
  part2: {
    title: 'การจัดชุดอาหาร',
    scenarioHtml: `
      <p>ศูนย์พักพิงแห่งหนึ่งกำลังเตรียม ชุดอาหารสำหรับผู้ประสบภัย โดยจัดอาหารเป็น 2 ขนาด ได้แก่ ชุดมาตรฐาน และ ชุดพิเศษ ข้อมูลการจัดชุดมีดังนี้</p>
      <ul data-track="ข้อมูลชุดอาหาร">
        <li>ชุดมาตรฐาน 1 ชุด ประกอบด้วยข้าวกล่อง 1 กล่อง และน้ำดื่ม 1 ขวด</li>
        <li>ชุดพิเศษ 1 ชุด ประกอบด้วยข้าวกล่อง 2 กล่อง และน้ำดื่ม 1 ขวด</li>
        <li>ศูนย์เตรียมชุดอาหารทั้งสองแบบรวมกัน 180 ชุด</li>
        <li>เมื่อนับข้าวกล่องทั้งหมด พบว่ามี 240 กล่อง</li>
        <li>น้ำดื่มทุกชุดใช้ขวดละ 1 ขวด</li>
      </ul>
      <p>กำหนดให้ <i>x</i> แทนจำนวนชุดมาตรฐาน และ <i>y</i> แทนจำนวนชุดพิเศษ</p>`,
    askHtml: `<p><b>จงเขียนระบบสมการที่จะใช้ในการหาจำนวนชุดมาตรฐานและจำนวนชุดพิเศษ</b>
      <br><span class="small">พิมพ์สมการละ 1 ช่อง เช่น 3x + y = 50 (ใช้ตัวแปร x และ y)</span></p>`,
    sourceHtml: '',
    answer: {
      type: 'short',
      fields: [
        { id: 'eq1', label: 'สมการที่ 1', text: true, accept: [], placeholder: '... = ...' },
        { id: 'eq2', label: 'สมการที่ 2', text: true, accept: [], placeholder: '... = ...' }
      ]
    },
    workings: true,
    mathPad: { chips: ['x', 'y', '180', '240', '='], phrases: ['ชุดทั้งหมด ', 'ข้าวกล่องทั้งหมด '], calculator: false,
               placeholder: 'จดความคิดได้ เช่น\nชุดทั้งหมด: ...' }
  },
  grade(resp, h) {
    // แปลง "ซ้าย = ขวา" เป็น (a, b, c) ของ ax + by + c = 0 โดยแทนค่า x, y ที่จุด (0,0), (1,0), (0,1)
    function coeff(eq) {
      const s = String(eq || '').replace(/\s+/g, '').replace(/[−–]/g, '-').replace(/[×·]/g, '*').toLowerCase();
      const parts = s.split('=');
      if (parts.length !== 2 || !parts[0] || !parts[1]) return null;
      const f = (x, y) => {
        const sub = t => t.replace(/x/g, '(' + x + ')').replace(/y/g, '(' + y + ')');
        const L = h.evaluate(sub(parts[0])), R = h.evaluate(sub(parts[1]));
        return (isNaN(L) || isNaN(R)) ? NaN : L - R;
      };
      const c = f(0, 0), a = f(1, 0) - c, b = f(0, 1) - c;
      if ([a, b, c].some(isNaN) || (a === 0 && b === 0)) return null;
      const f2 = f(2, 3);                                   // ต้องเป็นเชิงเส้น
      if (Math.abs(f2 - (2 * a + 3 * b + c)) > 1e-9) return null;
      return [a, b, c];
    }
    function same(p, q) {                                   // เป็นพหุคูณกันหรือไม่
      if (!p) return false;
      const k = Math.abs(q[0]) > 0 ? p[0] / q[0] : p[1] / q[1];
      return k !== 0 && p.every((v, i) => Math.abs(v - k * q[i]) < 1e-9);
    }
    const T1 = [1, 1, -180], T2 = [1, 2, -240];
    const c1 = coeff(resp.values.eq1), c2 = coeff(resp.values.eq2);
    const ok = (same(c1, T1) && same(c2, T2)) || (same(c1, T2) && same(c2, T1));
    const has1 = same(c1, T1) || same(c2, T1), has2 = same(c1, T2) || same(c2, T2);
    return {
      score: ok ? 1 : 0, max: 1, total: 2, items: [has1, has2], correctCount: [has1, has2].filter(Boolean).length,
      notes: [
        { ok: has1, text: 'มีสมการจำนวนชุด: x + y = 180 (หรือรูปที่สมมูลกัน)' },
        { ok: has2, text: 'มีสมการจำนวนข้าวกล่อง: x + 2y = 240 (หรือรูปที่สมมูลกัน)' }
      ],
      review: (c1 && c2) ? '' : 'มีสมการที่ระบบอ่านไม่ได้ (ต้องมีเครื่องหมาย = และใช้ตัวแปร x, y) ครูตรวจซ้ำได้จากชีต Log'
    };
  },
  part3: {
    answerHtml: `
      <p><b>ตอบ &nbsp; <i>x</i> + <i>y</i> = 180 &nbsp; และ &nbsp; <i>x</i> + 2<i>y</i> = 240</b></p>
      <p>ศูนย์เตรียมชุดอาหารทั้งสองแบบรวมกัน 180 ชุด จะได้ <i>x</i> + <i>y</i> = 180</p>
      <p>ชุดมาตรฐานมีข้าวกล่อง 1 กล่อง ชุดพิเศษมี 2 กล่อง รวม 240 กล่อง จะได้ <i>x</i> + 2<i>y</i> = 240</p>
      <p class="small">(แก้ระบบสมการได้ <i>y</i> = 60 และ <i>x</i> = 120)</p>`,
    note: 'ระบบยอมรับสมการที่สมมูลกัน เช่น y + x = 180 หรือ 2x + 2y = 360 และสลับลำดับสมการได้',
    rubric: [{ text: 'ตอบว่า x + y = 180 และ x + 2y = 240', score: 1 }, { text: 'ตอบคำตอบอื่น ๆ หรือไม่ตอบ', score: 0 }]
  },
  maxScore: 1
});
