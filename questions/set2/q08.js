/* ข้อสอบชุดที่ 2 ข้อที่ 8  |  ประเภท: เขียนตอบสั้น  (ภาพการจัดโต๊ะวาดด้วย SVG) */
registerQuestion({
  id: 8,
  theme: { emoji: '🍽️', color: '#d97706' },

  part1: { type: 'short', processes: ['think'] },

  part2: {
    title: 'โต๊ะอาหาร',
    scenarioHtml: (function () {
      /* วาดโต๊ะ n ตัวต่อกัน: หัวโต๊ะ 2 ฝั่งฝั่งละ 1 เก้าอี้, ด้านยาวโต๊ะละ 2 เก้าอี้ทั้งบนและล่าง */
      function tables(n) {
        var T = 56, R = 7, padX = 26, padY = 24;
        var w = n * T + padX * 2, h = T + padY * 2;
        var s = '<svg viewBox="0 0 ' + w + ' ' + (h + 26) + '" width="' + w + '" style="max-width:100%;height:auto" role="img" aria-label="โต๊ะ ' + n + ' ตัวต่อกัน">';
        for (var i = 0; i < n; i++) {
          var x = padX + i * T;
          s += '<rect x="' + x + '" y="' + padY + '" width="' + T + '" height="' + T + '" fill="#fff" stroke="#333" stroke-width="2"/>';
          [x + T * 0.3, x + T * 0.7].forEach(function (cx) {
            s += '<circle cx="' + cx + '" cy="' + (padY - 11) + '" r="' + R + '" fill="#222"/>';
            s += '<circle cx="' + cx + '" cy="' + (padY + T + 11) + '" r="' + R + '" fill="#222"/>';
          });
        }
        s += '<circle cx="' + (padX - 13) + '" cy="' + (padY + T / 2) + '" r="' + R + '" fill="#222"/>';
        s += '<circle cx="' + (padX + n * T + 13) + '" cy="' + (padY + T / 2) + '" r="' + R + '" fill="#222"/>';
        s += '<text x="' + w / 2 + '" y="' + (h + 20) + '" text-anchor="middle" font-size="15" fill="#333">' + n + ' โต๊ะ</text></svg>';
        return '<div data-track="ภาพ ' + n + ' โต๊ะ" style="display:inline-block;background:#fff;border-radius:12px;padding:6px 8px;margin:4px">' + s + '</div>';
      }
      return `
      <p>ภัตตาคารแห่งหนึ่งมีห้องจัดเลี้ยงสำหรับให้ลูกค้าจองเพื่อจัดเลี้ยงในงานสำคัญต่าง ๆ เช่น งานปีใหม่ งานวันเกิด งานมงคลสมรส
      หรืองานอื่น ๆ ซึ่งสามารถนำโต๊ะมาวางเรียงติดกันได้ตามที่ลูกค้าต้องการ เพื่อให้ลูกค้าสามารถพูดคุยสนทนากันได้สะดวกในขณะที่รับประทานอาหาร</p>
      <p>รูปแบบในการจัดโต๊ะและเก้าอี้ของภัตตาคารนี้เป็นดังภาพ จะเห็นได้ว่า<b>หัวโต๊ะทั้งสองฝั่งจะจัดเก้าอี้เพียงตัวเดียว</b>
      ในขณะที่<b>ด้านที่ไม่ใช่หัวโต๊ะ จะสามารถจัดเก้าอี้ได้ฝั่งละ 2 ตัว</b> เมื่อนำโต๊ะมาต่อกัน ก็ยังคงจัดในรูปแบบเดิม ดังภาพตัวอย่างด้านล่างนี้</p>
      <div style="text-align:center">${tables(1)}${tables(2)}${tables(3)}</div>
      <p class="small" style="text-align:center">● = เก้าอี้ &nbsp; □ = โต๊ะ</p>`;
    })(),
    askHtml: `<p><b>ถ้าภัตตาคารนี้ต้องการต่อโต๊ะติดกันทั้งหมด 12 ตัวเพื่อจัดเลี้ยงให้ลูกค้า จะต้องใช้เก้าอี้ทั้งหมดกี่ตัว</b></p>`,
    sourceHtml: '',

    answer: {
      type: 'short',
      fields: [{ id: 'chairs', label: 'ต้องใช้เก้าอี้ทั้งหมด', unit: 'ตัว', accept: [50], tol: 0 }],
      scoring: [[1, 1]]
    },
    workings: true,
    mathPad: {
      chips: ['n', '12', 'ตัว', 'โต๊ะ'],
      phrases: ['1 โต๊ะ ใช้เก้าอี้ ', '2 โต๊ะ ใช้เก้าอี้ ', '3 โต๊ะ ใช้เก้าอี้ ', 'n โต๊ะ ใช้เก้าอี้ ', '12 โต๊ะ ใช้เก้าอี้ ', 'เพิ่มขึ้นทีละ '],
      calculator: true,
      placeholder: 'ลองหาแบบรูปจากภาพ เช่น\n1 โต๊ะ ใช้เก้าอี้ ... ตัว\n2 โต๊ะ ใช้เก้าอี้ ... ตัว\n...'
    }
  },

  part3: {
    answerHtml: `
      <p><b>ตอบ 50 ตัว</b></p>
      <p><b>แนวคิด</b></p>
      <ul>
        <li>ถ้ามี 1 โต๊ะ ใช้เก้าอี้ (1 × 4) + 2 = 6 ตัว</li>
        <li>ถ้ามี 2 โต๊ะ ใช้เก้าอี้ (2 × 4) + 2 = 10 ตัว</li>
        <li>ถ้ามี 3 โต๊ะ ใช้เก้าอี้ (3 × 4) + 2 = 14 ตัว</li>
        <li>⋮</li>
        <li>ถ้ามี <i>n</i> โต๊ะ ใช้เก้าอี้ (<i>n</i> × 4) + 2 ตัว</li>
      </ul>
      <p>ดังนั้น ถ้ามี 12 โต๊ะ ใช้เก้าอี้ (12 × 4) + 2 = <b>50 ตัว</b></p>`,
    rubric: [
      { text: 'ตอบ 50 ตัว', score: 1 },
      { text: 'ตอบคำตอบอื่น ๆ หรือไม่ตอบ', score: 0 }
    ]
  },

  maxScore: 1
});
