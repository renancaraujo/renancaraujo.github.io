registerPaint("stripes",class{static get inputProperties(){return["--line-color","--line-thickness","--line-interval"]}static get contextOptions(){return{alpha:!0}}paint(t,e,i){const n=i.get("--line-color").toString()||"#000000";let r,o;try{r=parseFloat(i.get("--line-thickness").toString())||1,o=parseFloat(i.get("--line-interval").toString())||1}catch(t){r=1,o=1}const l=r+o,s=Math.ceil(e.height/l);for(let i=0;i<s;i++){t.beginPath(),t.strokeStyle=n,t.lineWidth=r/2,t.lineCap="round";const o=i*l;t.moveTo(0,o),t.lineTo(e.width,o),t.stroke()}}});
//# sourceMappingURL=stripespainter.d420e509.js.map
