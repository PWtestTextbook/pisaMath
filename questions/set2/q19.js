/* ข้อสอบชุดที่ 2 ข้อที่ 19  |  ประเภท: เขียนตอบสั้น  (แผนภูมิรูปภาพสร้างจากข้อมูล: แก้จำนวนได้ที่ data) */
registerQuestion({
  id: 19,
  theme: { emoji: '♻️', color: '#16a34a' },
  part1: { type: 'short', processes: ['use'] },
  part2: {
    title: 'ภารกิจรีไซเคิลอุปกรณ์ดิจิทัล',
    scenarioHtml: (function () {
      // จำนวนเครื่องจริง (รูป 1 รูป = 50 เครื่อง)
      var data = [['มกราคม', 300, 200], ['กุมภาพันธ์', 400, 250], ['มีนาคม', 350, 300],
                  ['เมษายน', 450, 400], ['พฤษภาคม', 500, 200], ['มิถุนายน', 550, 450]];
      var phone = '<i style="display:inline-block;width:13px;height:22px;margin:1px;border-radius:3px;background:linear-gradient(#5aa9ff,#2563eb);border:2px solid #1e293b"></i>';
      var tab = '<i style="display:inline-block;width:20px;height:22px;margin:1px;border-radius:3px;background:linear-gradient(#6ee7a3,#16a34a);border:2px solid #1e293b"></i>';
      var rep = function (s, n) { var o = ''; for (var i = 0; i < n; i++) o += s; return o; };
      var rows = data.map(function (d) {
        return '<tr><td>' + d[0] + '</td><td class="l" data-track="มือถือ ' + d[0] + '">' + rep(phone, d[1] / 50) +
               '</td><td class="l" data-track="แท็บเล็ต ' + d[0] + '">' + rep(tab, d[2] / 50) + '</td></tr>';
      }).join('');
      return `
      <p>ศูนย์ GreenLoop Recycle จัดกิจกรรมรับคืนอุปกรณ์อิเล็กทรอนิกส์ขนาดเล็กจากประชาชน เพื่อนำเข้าสู่กระบวนการคัดแยกและรีไซเคิล
      โดยบันทึกจำนวน <b>โทรศัพท์มือถือ</b> และ <b>แท็บเล็ต</b> ที่รับคืนได้ในช่วง 6 เดือนแรกของปี พ.ศ. 2569 ดังแผนภูมิรูปภาพต่อไปนี้</p>
      <div style="background:#fff;color:#1e293b;border-radius:16px;padding:10px;border:2px solid var(--line)">
        <div style="text-align:center;font-weight:700;margin-bottom:6px">จำนวนอุปกรณ์อิเล็กทรอนิกส์ที่ศูนย์ GreenLoop Recycle รับคืนได้</div>
        <div class="table-scroll"><table class="data" style="width:100%;margin:0">
          <thead><tr><th>เดือน</th><th>${phone} โทรศัพท์มือถือ</th><th>${tab} แท็บเล็ต</th></tr></thead>
          <tbody>${rows}</tbody></table></div>
        <p data-track="สัญลักษณ์แผนภูมิ" style="margin:8px 0 0;text-align:center"><b>สัญลักษณ์</b> &nbsp; ${phone} แทนโทรศัพท์มือถือ 50 เครื่อง &nbsp;&nbsp; ${tab} แทนแท็บเล็ต 50 เครื่อง</p>
      </div>
      <p data-track="การคาดการณ์ ก.ค.">ศูนย์แห่งนี้คาดว่าในเดือนกรกฎาคม พ.ศ. 2569 จะสามารถรับคืนโทรศัพท์มือถือได้
      <b>มากกว่าค่าเฉลี่ย</b>ของจำนวนโทรศัพท์มือถือในช่วง 6 เดือนแรก <b>20%</b> และรับคืนแท็บเล็ตได้
      <b>น้อยกว่าค่าเฉลี่ย</b>ของจำนวนแท็บเล็ตในช่วง 6 เดือนแรก <b>10%</b></p>`;
    })(),
    askHtml: `<p><b>หากการคาดการณ์เป็นไปตามที่กำหนด เดือนกรกฎาคม พ.ศ. 2569 ศูนย์ GreenLoop Recycle จะรับคืนอุปกรณ์ทั้งสองประเภทรวมกันกี่เครื่อง</b></p>`,
    sourceHtml: '',
    answer: { type: 'short', fields: [{ id: 'total', label: 'รับคืนรวมกัน', unit: 'เครื่อง', accept: [780], tol: 0 }], scoring: [[1, 1]] },
    workings: true,
    mathPad: {
      chips: ['50', '6', '20%', '10%'],
      phrases: ['มือถือรวม ', 'แท็บเล็ตรวม ', 'ค่าเฉลี่ย ', 'กรกฎาคม '],
      calculator: true, placeholder: 'ทดเลขได้ เช่น\nมือถือ ม.ค. = ... รูป × 50 = ...'
    }
  },
  part3: {
    answerHtml: `
      <p><b>ตอบ 780 เครื่อง</b></p>
      <table class="data narrow">
        <thead><tr><th>เดือน</th><th>โทรศัพท์มือถือ</th><th>แท็บเล็ต</th></tr></thead>
        <tbody>
          <tr><td>มกราคม</td><td>300</td><td>200</td></tr><tr><td>กุมภาพันธ์</td><td>400</td><td>250</td></tr>
          <tr><td>มีนาคม</td><td>350</td><td>300</td></tr><tr><td>เมษายน</td><td>450</td><td>400</td></tr>
          <tr><td>พฤษภาคม</td><td>500</td><td>200</td></tr><tr><td>มิถุนายน</td><td>550</td><td>450</td></tr>
          <tr><th>รวม</th><th>2,550</th><th>1,800</th></tr>
        </tbody></table>
      <p>ค่าเฉลี่ยโทรศัพท์มือถือ = 2,550 ÷ 6 = 425 เครื่อง กรกฎาคมมากกว่าค่าเฉลี่ย 20% = (120/100) × 425 = 510 เครื่อง</p>
      <p>ค่าเฉลี่ยแท็บเล็ต = 1,800 ÷ 6 = 300 เครื่อง กรกฎาคมน้อยกว่าค่าเฉลี่ย 10% = (90/100) × 300 = 270 เครื่อง</p>
      <p>รวม 510 + 270 = <b>780 เครื่อง</b></p>`,
    rubric: [{ text: 'ตอบ 780 เครื่อง', score: 1 }, { text: 'ตอบคำตอบอื่น ๆ หรือไม่ตอบ', score: 0 }]
  },
  maxScore: 1
});
