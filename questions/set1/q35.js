/* ข้อสอบชุดที่ 1 ข้อที่ 35  |  ประเภท: short  (สร้างจาก PDF ต้นฉบับ: ข้อความ + ภาพตัดจากหน้า) */
registerQuestion({
  id: 35,
  theme: {"emoji": "🛰️", "color": "#4338ca"},
  part1: {"type": "short", "processes": ["reason", "use", "interpret"]},
  part2: {"title": "GPS", "scenarioHtml": "<p>ทุกวันนี้เวลาเราเดินทางไปไหนมาไหน เราแทบจะไม่ต้องคอยสอบถามทางจากผู้คนในพื้นที่หากเส้นทางไม่มีความซับซ้อน หรืออันตราย เพราะทุกคนสามารถใช้เทคโนโลยีที่ชื่อว่า GPS หรือ Global Positioning System เพื่อระบุตำแหน่งที่เราต้องการเดินทางได้ ซึ่งระบบนี้จะใช้ดาวเทียม 3 ตัวในการระบุตำแหน่งที่เราต้องการไป หรือระบุตำแหน่งของเราได้แม่นยำมากขึ้น โดยอาศัยสมบัติของวงกลม หากดาวเทียมทั้ง 3 ดวงระบุจัดที่ตัดกันของทั้ง 3 ดวงพร้อมกันได้แล้ว ตำแหน่งนั้นจะถือเป็นพิกัดของสัญญาณมือถือหรือตำแหน่งที่เราต้องการจะไป อยากทราบว่า จุดใดคือตำแหน่งพิกัดตามคำอธิบายการทำงานของระบบ GPS ที่ใช้ระบุตำแหน่งที่เราใช้โทรศัพท์มือถือ พร้อมแสดงเหตุผลอย่างสั้น</p><p style=\"text-align:center\"><img src=\"questions/set1/img/q35-1.png\" data-track=\"ภาพ 1\" alt=\"รายการประเมิน (ภาพรวม) คะแนน  ตอบว่า จุด E เพราะเป็นจุดเดียวที่วงกลมทั้ง 3 ตัดกัน 2  ตอบว่า จุด E แต่ไม่ได้แสดงเหตุผล 1  ตอบว่า ตอบจุดอื่นที่ไม่ใช่จุด E หรือไม่ตอบ 0\" style=\"max-width:100%;width:378px;background:#fff;border-radius:10px\"></p>", "askHtml": "<p><b>ตอบคำถามจากสถานการณ์ข้างต้น พร้อมเขียนแสดงวิธีคิดหรือเหตุผลในกระดาน</b></p>", "sourceHtml": "", "answer": {"type": "short", "fields": [{"id": "p", "label": "จุดที่เป็นตำแหน่งของโทรศัพท์มือถือ", "accept": [], "tol": 0, "text": true, "placeholder": "เช่น A"}, {"id": "why", "label": "เหตุผล (เพราะอะไร)", "text": true, "area": true, "accept": [], "placeholder": "อธิบายว่าทำไมจึงเป็นจุดนี้"}], "scoring": [[1, 2]]}, "workings": true, "mathPad": {"chips": [], "phrases": ["เป็นจุดที่ ", "วงกลมทั้ง 3 วง ", "ตัดกัน "], "calculator": true, "placeholder": "เขียน 1 ขั้นตอนต่อ 1 บรรทัด"}, "noPad": true},
  grade: function (resp, h) {
    const V = resp.values || {}, O = resp.value, W = String(resp.workings || '');
    const T = (W + ' ' + Object.keys(V).map(k => V[k]).join(' ')).replace(/,/g, '');
    const has = (...ws) => ws.some(w => T.toLowerCase().indexOf(String(w).replace(/,/g, '').toLowerCase()) >= 0);
    const num = (n, t) => h.hasNumber(T, n, t || 0);
    const C = [["ตอบจุด E", /^\s*(จุด)?\s*E\s*$/i.test(String(V.p || ''))]], E = [["ให้เหตุผลว่าเป็นจุดเดียวที่วงกลมทั้ง 3 วงตัดกัน", has('ตัด', 'ทั้ง 3', 'สามวง', '3 วง')]];
    const cOk = C.every(c => c[1]), eN = E.filter(c => c[1]).length, all = C.concat(E);
    const score = C.length ? (cOk ? (eN === E.length ? 2 : 1) : 0) : (eN === E.length ? 2 : eN > 0 ? 1 : 0);
    return { score, max: 2, total: all.length, items: all.map(c => !!c[1]), correctCount: all.filter(c => c[1]).length,
      notes: all.map(c => ({ ok: !!c[1], text: c[0] })), review: "ระบบตรวจจากคำสำคัญและตัวเลขในคำตอบ ครูควรอ่านวิธีทำประกอบเพื่อยืนยันคะแนน" };
  },
  part3: {"answerHtml": "<p>แนวการตอบ (ระบุจุดที่เป็นพิกัดของการใช้โทรศัพท์มือถือ พร้อมอธิบายเหตุผลที่เกี่ย วกับวงกลมทั้ง 3 วง) ตอบ จุด E เพราะเป็นจุดเดียวที่วงกลมทั้ง 3 ตัดกัน</p>", "rubric": [{"text": "ตอบว่า จุด E เพราะเป็นจุดเดียวที่วงกลมทั้ง 3 ตัดกัน", "score": 2}, {"text": "ตอบว่า จุด E แต่ไม่ได้แสดงเหตุผล", "score": 1}, {"text": "ตอบว่า ตอบจุดอื่นที่ไม่ใช่จุด E หรือไม่ตอบ", "score": 0}]},
  maxScore: 2
});
