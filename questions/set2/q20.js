/* ข้อสอบชุดที่ 2 ข้อที่ 20  |  ประเภท: อธิบายหรือแสดงวิธีทำ  (กราฟแท่ง + แผนภูมิวงกลม สร้างด้วย SVG) */
registerQuestion({
  id: 20,
  theme: { emoji: '🎮', color: '#2563eb' },
  part1: { type: 'explain', processes: ['use'] },
  part2: {
    title: 'มูลค่าการส่งออกดิจิทัลคอนเทนต์ของไทย',
    scenarioHtml: (function () {
      /* กราฟแท่ง: มูลค่า (พันล้านบาท) */
      var yrs = ['2564', '2565', '2566', '2567', '2568'], val = [24, 28, 33, 39, 45];
      var W = 380, H = 270, L = 44, B = 40, T = 20, pw = W - L - 12, ph = H - T - B;
      var bar = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:400px;height:auto" role="img" aria-label="กราฟแท่งมูลค่าการส่งออกดิจิทัลคอนเทนต์ ปี 2564 ถึง 2568">';
      for (var g = 0; g <= 50; g += 10) {
        var gy = T + ph * (1 - g / 50);
        bar += '<line x1="' + L + '" x2="' + (W - 12) + '" y1="' + gy + '" y2="' + gy + '" stroke="#e2e8f0"/>' +
               '<text x="' + (L - 6) + '" y="' + (gy + 4) + '" font-size="11" text-anchor="end" fill="#475569">' + g + '</text>';
      }
      val.forEach(function (v, i) {
        var bw = pw / yrs.length * 0.6, x = L + pw / yrs.length * (i + 0.2), y = T + ph * (1 - v / 50);
        bar += '<rect data-track="แท่ง ปี ' + yrs[i] + '" x="' + x + '" y="' + y + '" width="' + bw + '" height="' + (T + ph - y) + '" fill="#2f74d0" rx="3"/>' +
               '<text x="' + (x + bw / 2) + '" y="' + (y - 5) + '" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">' + v + '</text>' +
               '<text x="' + (x + bw / 2) + '" y="' + (T + ph + 16) + '" font-size="12" text-anchor="middle" fill="#475569">' + yrs[i] + '</text>';
      });
      bar += '<text x="4" y="12" font-size="11" fill="#475569">มูลค่า (พันล้านบาท)</text><text x="' + (L + pw / 2) + '" y="' + (H - 4) + '" font-size="12" text-anchor="middle" fill="#475569">ปี พ.ศ.</text></svg>';
      /* แผนภูมิวงกลม ปี 2568 */
      var parts = [['เกมออนไลน์และเกมดิจิทัล', 36, '#2f74d0'], ['ภาพยนตร์และซีรีส์', 24, '#f57c2b'], ['แอนิเมชันและกราฟิก', 18, '#3fae5a'],
                   ['ดนตรีดิจิทัล', 12, '#8b4fc7'], ['แอปพลิเคชันและสื่อดิจิทัลอื่น ๆ', 10, '#f5c12e']];
      var cx = 110, cy = 110, r = 100, a0 = -Math.PI / 2, pie = '<svg viewBox="0 0 220 220" style="width:100%;max-width:220px;height:auto" role="img" aria-label="แผนภูมิวงกลมสัดส่วนประเภทดิจิทัลคอนเทนต์ปี 2568">';
      parts.forEach(function (p) {
        var a1 = a0 + p[1] / 100 * 2 * Math.PI, large = p[1] > 50 ? 1 : 0;
        var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
        var am = (a0 + a1) / 2;
        pie += '<path data-track="วงกลม ' + p[0] + '" d="M' + cx + ',' + cy + ' L' + x0 + ',' + y0 + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + x1 + ',' + y1 + ' Z" fill="' + p[2] + '" stroke="#fff" stroke-width="2"/>' +
               '<text x="' + (cx + r * 0.62 * Math.cos(am)) + '" y="' + (cy + r * 0.62 * Math.sin(am) + 5) + '" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">' + p[1] + '%</text>';
        a0 = a1;
      });
      pie += '</svg>';
      var legend = parts.map(function (p) {
        return '<div data-track="วงกลม ' + p[0] + '" style="display:flex;gap:6px;align-items:center;font-size:14px"><i style="width:12px;height:12px;border-radius:3px;background:' + p[2] + ';flex:none"></i>' + p[0] + ' <b>' + p[1] + '%</b></div>';
      }).join('');
      return '<p>มูลค่าการส่งออกดิจิทัลคอนเทนต์ของประเทศไทย เป็นดังนี้</p>' +
        '<div style="display:flex;flex-wrap:wrap;gap:12px;background:#fff;color:#0f172a;border:2px solid var(--line);border-radius:16px;padding:12px">' +
          '<div style="flex:1 1 300px;text-align:center"><b>กราฟแสดงมูลค่าการส่งออกดิจิทัลคอนเทนต์ของประเทศไทย ระหว่างปี พ.ศ. 2564 – 2568</b>' + bar + '</div>' +
          '<div style="flex:1 1 300px;text-align:center"><b>แผนภูมิวงกลมแสดงสัดส่วนประเภทดิจิทัลคอนเทนต์ที่ส่งออกของประเทศไทย ในปี พ.ศ. 2568</b>' +
            '<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:center">' + pie + '<div style="text-align:left;display:grid;gap:4px">' + legend + '</div></div></div>' +
        '</div>';
    })(),
    askHtml: `<p><b>ในปี พ.ศ. 2568 มูลค่าการส่งออกดิจิทัลคอนเทนต์ประเภท “ดนตรีดิจิทัล” มากกว่าคอนเทนต์ประเภท “แอปพลิเคชันและสื่อดิจิทัลอื่น ๆ”
      ของปี พ.ศ. 2567 ประมาณกี่พันล้านบาท จงแสดงวิธีทำ</b></p>`,
    sourceHtml: '',
    answer: {
      type: 'explain',
      fields: [{ id: 'diff', label: 'มากกว่าประมาณ', unit: 'พันล้านบาท', accept: [1.5, 1500000000], tol: 0.0001, placeholder: '0' }]
    },
    workings: true,
    mathPad: {
      chips: ['45', '39', '12%', '10%', 'พันล้านบาท'],
      phrases: ['ปี 2568 ', 'ปี 2567 ', 'ดนตรีดิจิทัล ', 'แอปพลิเคชันฯ ', 'มากกว่า '],
      calculator: true, placeholder: 'แสดงวิธีทำ เช่น\nดนตรีดิจิทัล ปี 2568 = ...'
    }
  },
  /* 2 = ตอบ 1.5 พันล้าน + วิธีทำมี 5.4 (ดนตรี 2568) และ 3.9 (แอปฯ 2567)   1 = ตอบถูกแต่วิธีทำไม่ครบ */
  grade(resp, h) {
    const w = resp.workings || '';
    const v = h.parseNum(resp.values.diff);
    const ansOk = Math.abs(v - 1.5) < 1e-4 || Math.abs(v - 1500000000) < 1;
    const music = h.hasNumber(w, 5.4) || h.hasNumber(w, 5400000000);
    const app = h.hasNumber(w, 3.9) || h.hasNumber(w, 3900000000);
    const reasonOk = music && app && h.check(w).checkedBad === 0;
    return {
      score: ansOk ? (reasonOk ? 2 : 1) : 0, max: 2, total: 3,
      items: [ansOk, music, app], correctCount: [ansOk, music, app].filter(Boolean).length,
      notes: [
        { ok: ansOk, text: 'คำตอบ: มากกว่าประมาณ 1.5 พันล้านบาท (1,500,000,000 บาท)' },
        { ok: music, text: 'วิธีทำ: ดนตรีดิจิทัล ปี 2568 = 12% × 45 = 5.4 พันล้านบาท' },
        { ok: app, text: 'วิธีทำ: แอปพลิเคชันฯ ปี 2567 = 10% × 39 = 3.9 พันล้านบาท' }
      ],
      review: 'ส่วนวิธีทำตรวจอัตโนมัติจากตัวเลขสำคัญ ครูอาจปรับคะแนนหลังอ่านวิธีทำ'
    };
  },
  part3: {
    answerHtml: `
      <p><b>ตอบ 1.5 พันล้านบาท (1,500,000,000 บาท)</b></p>
      <p>ปี 2568 มูลค่าการส่งออกรวม 45 พันล้านบาท ดนตรีดิจิทัล 12% = (12/100) × 45 = 5.4 พันล้านบาท</p>
      <p>ปี 2567 มูลค่าการส่งออกรวม 39 พันล้านบาท แอปพลิเคชันและสื่อดิจิทัลอื่น ๆ 10% = (10/100) × 39 = 3.9 พันล้านบาท</p>
      <p>มากกว่ากัน 5.4 − 3.9 = <b>1.5 พันล้านบาท</b></p>`,
    note: 'แผนภูมิวงกลมเป็นข้อมูลปี 2568 แนวการตอบนี้ใช้สัดส่วน 10% กับปี 2567 ด้วย (สมมติว่าสัดส่วนเท่าเดิม) ตามแนวการตอบต้นฉบับ',
    rubric: [
      { text: 'ตอบว่า 1,500,000,000 บาท และมีการอธิบายเหตุผลประกอบอย่างถูกต้อง', score: 2 },
      { text: 'ตอบว่า 1,500,000,000 บาท แต่ไม่ได้อธิบายเหตุผลประกอบ หรืออธิบายแต่ไม่ถูกต้อง', score: 1 },
      { text: 'คำตอบอื่น ๆ หรือไม่ตอบ', score: 0 }
    ]
  },
  maxScore: 2
});
