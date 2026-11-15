/* ข้อสอบชุดที่ 2 ข้อที่ 36  |  ประเภท: เขียนตอบสั้น (รหัส 6 หลัก) */
registerQuestion({
  id: 36,
  theme: { emoji: '🔑', color: '#7c3aed' },
  part1: { type: 'short', processes: ['think'] },
  part2: {
    title: 'ตู้รับพัสดุอัจฉริยะของโรงเรียน',
    scenarioHtml: `
      <p>โรงเรียนแห่งหนึ่งติดตั้ง ตู้รับพัสดุอัจฉริยะ (Smart Parcel Locker) สำหรับให้นักเรียนรับหนังสือ อุปกรณ์การเรียน และสิ่งของที่สั่งซื้อทางออนไลน์
      โดยแต่ละช่องของตู้จะเปิดได้ด้วยรหัสตัวเลข 6 หลัก โดยแต่ละหลักเป็นเลขโดดตั้งแต่ 0 – 9</p>
      <p>วันหนึ่งระบบเกิดปัญหาทำให้หน้าจอของตู้แสดงรหัสไม่ครบ แต่ระบบยังแสดง<b>เงื่อนไขเกี่ยวกับรหัส</b>ไว้ดังนี้</p>
      <ul data-track="เงื่อนไขรหัส">
        <li>รหัสประกอบด้วยตัวเลข 6 หลัก โดยกำหนดให้หลักที่ 1 ถึงหลักที่ 6 เป็น <i>a b c d e f</i> ตามลำดับ</li>
        <li>ตัวเลขทั้ง 6 หลัก ไม่ซ้ำกัน</li>
        <li>ผลบวกของตัวเลขใน 3 หลักแรกเท่ากับ 16</li>
        <li>ผลบวกของตัวเลขใน 3 หลักสุดท้ายเท่ากับ 12</li>
        <li>ตัวเลขในหลักที่ 2 มากกว่าหลักที่ 5 อยู่ 2</li>
        <li>ตัวเลขในหลักที่ 1 น้อยกว่าหลักที่ 3 อยู่ 1</li>
        <li>จำนวนสามหลักที่เกิดจากหลักที่ 4, 5 และ 6 ตามลำดับ หารด้วย 8 ลงตัว</li>
      </ul>
      <div style="text-align:center;margin:6px 0">${'abcdef'.split('').map(function (c) {
        return '<span style="display:inline-grid;place-items:center;width:40px;height:48px;margin:2px;border-radius:10px;border:2px dashed var(--qc);font:700 22px var(--read);color:var(--qc)"><i>' + c + '</i></span>';
      }).join('')}</div>`,
    askHtml: `<p><b>จงหารหัสที่ใช้ในการเปิดตู้รับพัสดุอัจฉริยะ</b></p>`,
    sourceHtml: '',
    answer: { type: 'short', fields: [{ id: 'code', label: 'รหัส 6 หลัก', accept: ['637912'], text: true, placeholder: '______' }], scoring: [[1, 1]] },
    workings: true,
    mathPad: { chips: ['a', 'b', 'c', 'd', 'e', 'f', '16', '12', '÷ 8'], phrases: ['a + b + c = ', 'd + e + f = ', 'b = e + 2', 'a = c − 1', 'ถ้า c = ', 'ซ้ำ '],
               calculator: true, placeholder: 'จดการลองค่า เช่น\nถ้า c = 4 จะได้ ...' }
  },
  part3: {
    answerHtml: `
      <p><b>ตอบ 637912</b></p>
      <p>จาก <i>a</i> + <i>b</i> + <i>c</i> = 16 และ <i>a</i> = <i>c</i> − 1 จะได้ <i>b</i> = 17 − 2<i>c</i> และ <i>e</i> = <i>b</i> − 2 = 15 − 2<i>c</i></p>
      <table class="data narrow">
        <thead><tr><th><i>c</i></th><th><i>a</i></th><th><i>b</i></th><th><i>e</i></th><th>ผล</th></tr></thead>
        <tbody>
          <tr><td>4</td><td>3</td><td>9</td><td>7</td><td class="l"><i>d</i> + <i>f</i> = 5 → 075, 570 หาร 8 ไม่ลงตัว</td></tr>
          <tr><td>5</td><td>4</td><td>7</td><td>5</td><td class="l">ซ้ำ (<i>c</i> = <i>e</i> = 5)</td></tr>
          <tr><td>6</td><td>5</td><td>5</td><td>3</td><td class="l">ซ้ำ (<i>a</i> = <i>b</i> = 5)</td></tr>
          <tr><td>7</td><td>6</td><td>3</td><td>1</td><td class="l"><i>d</i> + <i>f</i> = 11 → <i>d</i>1<i>f</i> = 912 หาร 8 ลงตัว ✓</td></tr>
        </tbody></table>
      <p>ดังนั้น รหัสคือ <b>637912</b></p>`,
    rubric: [{ text: 'ตอบว่า 637912', score: 1 }, { text: 'ตอบคำตอบอื่น หรือ ไม่ตอบ', score: 0 }]
  },
  maxScore: 1
});
