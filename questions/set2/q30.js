/* ข้อสอบชุดที่ 2 ข้อที่ 30  |  ประเภท: อธิบายหรือแสดงวิธีทำ (จำนวนแบบ + เขียนรายการลำดับฐาน + เหตุผล) */
registerQuestion({
  id: 30,
  theme: { emoji: '🏃', color: '#ea580c' },
  part1: { type: 'explain', processes: ['interpret'] },
  part2: {
    title: 'เส้นทางกิจกรรมสุขภาพ',
    scenarioHtml: (function () {
      var base = function (k, name, ic) {
        return '<div data-track="ฐาน ' + k + '" style="flex:1 1 120px;text-align:center;background:var(--surface);border:2px solid var(--line);border-radius:16px;padding:8px">' +
          '<div style="font-size:26px">' + ic + '</div><div style="font:700 22px var(--fun);color:var(--qc)">' + k + '</div><div class="small">' + name + '</div></div>';
      };
      return `
      <p>โรงเรียนแห่งหนึ่งจัดกิจกรรม “วันสุขภาพและการเคลื่อนไหว” โดยให้นักเรียนแต่ละกลุ่มผ่านฐานกิจกรรมทั้งหมด 5 ฐาน ฐานละ 1 ครั้ง ได้แก่</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0">
        ${base('A', 'ฐานยืดเหยียด', '🤸')}${base('B', 'ฐานทรงตัว', '🧘')}${base('C', 'ฐานวัดชีพจร', '❤️')}${base('D', 'ฐานความรู้เรื่องอาหาร', '🍎')}${base('E', 'ฐานผ่อนคลาย', '😌')}
      </div>
      <p>แต่ละกลุ่มจะเริ่มจาก <b>จุดเริ่มต้น</b> และต้องผ่านทั้ง 5 ฐาน ฐานละหนึ่งครั้ง โดยไม่กลับไปฐานเดิม จากนั้นจึงไปยัง<b>จุดสิ้นสุด</b></p>
      <p>ผู้จัดงานกำหนดเงื่อนไขเพื่อให้การเปลี่ยนฐานของนักเรียนไม่แออัด ดังนี้</p>
      <ul data-track="เงื่อนไขลำดับฐาน">
        <li>นักเรียนต้องเข้าฐาน <b>C เป็นฐานแรก</b></li>
        <li>ฐาน <b>E ต้องเป็นฐานสุดท้าย</b> ก่อนออกจากกิจกรรม</li>
      </ul>`;
    })(),
    askHtml: `<p><b>จงหาว่ามีรูปแบบในการจัดลำดับฐานทั้งหมดกี่แบบ แบบใดบ้าง พร้อมอธิบายเหตุผล</b>
      <br><span class="small">กรอกจำนวนแบบ แล้วระบบจะแสดงช่อง “รูปแบบที่ …” ให้เขียนลำดับฐานแต่ละแบบ (เช่น CABDE) · เขียนเหตุผลในกระดานด้านล่าง</span></p>`,
    sourceHtml: '',
    answer: { type: 'explain', fields: [{ id: 'count', label: 'จัดลำดับได้ทั้งหมด', unit: 'แบบ', accept: [6], tol: 0 }],
              /* กรอกจำนวนแบบแล้ว ระบบแสดงช่อง "รูปแบบที่ ..." ตามจำนวนนั้น รับเฉพาะตัวอักษร A–E 5 ตัว */
              repeat: { from: 'count', id: 'p', label: 'รูปแบบที่', title: 'ลำดับการเข้าฐานแต่ละแบบ', chars: 'ABCDE', len: 5, max: 30, placeholder: 'เช่น ABCDE' } },
    workings: true,
    mathPad: {
      chips: ['A', 'B', 'C', 'D', 'E'],
      phrases: ['ฐานที่ 1 ', 'ฐานที่ 5 ', 'ฐานที่ 2–4 เป็น ', 'สลับกันได้ ', 'แบบ '],
      calculator: true, placeholder: 'เขียนเหตุผล เช่น\nฐานที่ 1 ต้องเป็น C เพราะ ...\nฐานที่ 2–4 สลับกันได้ ...'
    }
  },
  /* 2 = ตอบ 6 แบบ + เขียนครบ 6 ลำดับที่ถูก + มีเหตุผล (กล่าวถึงฐานแรก/สุดท้าย หรือการสลับฐาน A B D)
     1 = ตอบ 6 แบบ + เขียนครบ 6 ลำดับ แต่ไม่มีเหตุผล    0 = อื่น ๆ */
  grade(resp, h) {
    // แยกทีละบรรทัด ตัดช่องว่าง/ลูกศร/จุลภาค แล้วหาคำที่เป็นตัวอักษร A–E 5 ตัวติดกัน
    const tokens = (resp.seqs || []).map(x => String(x).toUpperCase());   // ช่อง "รูปแบบที่ ..." (ข้อมูลหลัก)
    String(resp.workings || '').toUpperCase().split(/\n/).forEach(line => {   // รองรับคำตอบเก่าที่เขียนในกระดาน
      (line.replace(/[ \t→\-–>]/g, '').match(/[A-E]{5}/g) || []).forEach(t => tokens.push(t));
    });
    const valid = ['CABDE', 'CADBE', 'CBADE', 'CBDAE', 'CDABE', 'CDBAE'];
    const found = valid.filter(v => tokens.indexOf(v) >= 0);
    const countOk = h.parseNum(resp.values.count) === 6;
    const extra = (resp.seqs || []).filter(x => x && valid.indexOf(String(x).toUpperCase()) < 0);
    const listOk = found.length === 6 && extra.length === 0;
    const reasonOk = h.hasWord(resp.workings, ['ฐานแรก', 'ฐานที่ 1', 'ฐานสุดท้าย', 'ฐานที่ 5', 'สลับ', '3 × 2', '3×2', '3!', '2 แบบ', 'ฐานที่ 2']);
    return {
      score: countOk && listOk ? (reasonOk ? 2 : 1) : 0, max: 2, total: 3,
      items: [countOk, listOk, reasonOk], correctCount: [countOk, listOk, reasonOk].filter(Boolean).length,
      notes: [
        { ok: countOk, text: 'คำตอบ: จัดลำดับได้ 6 แบบ' },
        { ok: listOk, text: 'เขียนรายการครบทั้ง 6 แบบ (พบ ' + found.length + ' จาก 6: ' + (found.join(', ') || '–') + ')' + (extra.length ? ' — มีแบบที่ไม่ถูกเงื่อนไข: ' + extra.join(', ') : '') },
        { ok: reasonOk, text: 'มีการอธิบายเหตุผล (เช่น C เป็นฐานแรก E เป็นฐานสุดท้าย ฐานที่ 2–4 คือ A B D สลับกัน)' }
      ],
      review: 'ส่วนเหตุผลตรวจอัตโนมัติจากคำสำคัญ ครูอาจปรับคะแนนหลังอ่านคำอธิบาย'
    };
  },
  part3: {
    answerHtml: `
      <p><b>ตอบ 6 แบบ ได้แก่ CABDE, CADBE, CBADE, CBDAE, CDABE, CDBAE</b></p>
      <p>ต้องเข้าฐาน C เป็นฐานแรก และฐาน E เป็นฐานสุดท้าย ฐานที่ 2, 3 และ 4 จึงเป็นฐาน A, B, D เรียงแบบใดก็ได้</p>
      <ul>
        <li>ถ้าฐานที่ 2 เป็น A ฐานที่ 3 และ 4 เป็น B, D สลับกัน ได้ 2 แบบ</li>
        <li>ถ้าฐานที่ 2 เป็น B ฐานที่ 3 และ 4 เป็น A, D สลับกัน ได้ 2 แบบ</li>
        <li>ถ้าฐานที่ 2 เป็น D ฐานที่ 3 และ 4 เป็น A, B สลับกัน ได้ 2 แบบ</li>
      </ul>
      <table class="data narrow">
        <thead><tr><th>แบบที่</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>C</td><td>A</td><td>B</td><td>D</td><td>E</td></tr><tr><td>2</td><td>C</td><td>A</td><td>D</td><td>B</td><td>E</td></tr>
          <tr><td>3</td><td>C</td><td>B</td><td>A</td><td>D</td><td>E</td></tr><tr><td>4</td><td>C</td><td>B</td><td>D</td><td>A</td><td>E</td></tr>
          <tr><td>5</td><td>C</td><td>D</td><td>A</td><td>B</td><td>E</td></tr><tr><td>6</td><td>C</td><td>D</td><td>B</td><td>A</td><td>E</td></tr>
        </tbody></table>
      <p>รวม 3 × 2 = <b>6 แบบ</b></p>`,
    rubric: [
      { text: 'ตอบว่า 6 แบบ ได้แก่ CABDE, CADBE, CBADE, CBDAE, CDABE, CDBAE และมีการอธิบายเหตุผลประกอบอย่างถูกต้อง', score: 2 },
      { text: 'ตอบว่า 6 แบบ พร้อมรายการทั้ง 6 แบบ แต่ไม่ได้อธิบายเหตุผลประกอบ หรืออธิบายแต่ไม่ถูกต้อง', score: 1 },
      { text: 'คำตอบอื่น ๆ หรือไม่ตอบ', score: 0 }
    ]
  },
  maxScore: 2
});
