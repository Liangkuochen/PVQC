let selectedWords=[], currentLevel=1, currentQuestion=0, answers=[], levelQuestions=[], studentName="";
const TOTAL=10;

function $(id){return document.getElementById(id)}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function sample(arr,n){return shuffle(arr).slice(0,n)}
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active")}
function startSystem(){
  studentName=$("studentName").value.trim();
  let count=Number($("wordCount").value);
  selectedWords=sample(WORDS,Math.min(count,WORDS.length));
  currentLevel=1; startLevel();
}
function startLevel(){
  currentQuestion=0; answers=[]; levelQuestions=sample(selectedWords,TOTAL);
  $("progressText").textContent=`第 ${currentLevel} 關 · 10 題`;
  const info=[
    ["🟦 LEVEL 1","英文 → 中文","看英文單字，選出正確的中文意思。"],
    ["🟩 LEVEL 2","中文 → 英文","看中文意思，選出正確的英文單字。"],
    ["🟨 LEVEL 3","英文 → 詞性","看英文單字，選出正確的詞性。"],
    ["🟪 LEVEL 4","聽發音 → 英文","聽英文發音，選出正確的英文單字。"]
  ][currentLevel-1];
  $("levelBadge").textContent=info[0]; $("levelTitle").textContent=info[1]; $("levelDescription").textContent=info[2];
  showScreen("levelScreen"); renderQuestion();
}
function makeOptions(item,level){
  let pool;
  if(level===1) pool=sample(selectedWords.filter(x=>x.word!==item.word),3).map(x=>x.zh);
  if(level===2) pool=sample(selectedWords.filter(x=>x.word!==item.word),3).map(x=>x.word);
  if(level===3) pool=sample(["noun","verb","adjective","adverb"].filter(x=>x!==item.pos),3).map(x=>POS_ZH[x]);
  if(level===4) pool=sample(selectedWords.filter(x=>x.word!==item.word),3).map(x=>x.word);
  let correct=level===1?item.zh:level===2?item.word:level===3?POS_ZH[item.pos]:item.word;
  return shuffle([correct,...pool]);
}
function renderQuestion(){
  const item=levelQuestions[currentQuestion];
  $("questionCount").textContent=`第 ${currentQuestion+1} / ${TOTAL} 題`;
  $("feedback").textContent="";
  $("nextBtn").hidden=true;
  $("speakBtn").hidden=currentLevel!==4;
  $("question").textContent=currentLevel===1||currentLevel===3?item.word:currentLevel===2?item.zh:"🔊 聽發音後作答";
  if(currentLevel===4) speakWord(item.word);
  const opts=makeOptions(item,currentLevel), box=$("options"); box.innerHTML="";
  opts.forEach(opt=>{
    const b=document.createElement("button"); b.className="option"; b.textContent=opt;
    b.onclick=()=>chooseAnswer(b,opt,item); box.appendChild(b);
  });
}
function chooseAnswer(btn,opt,item){
  const correct=currentLevel===1?item.zh:currentLevel===2?item.word:currentLevel===3?POS_ZH[item.pos]:item.word;
  document.querySelectorAll(".option").forEach(b=>b.disabled=true);
  const ok=opt===correct; btn.classList.add(ok?"correct":"wrong");
  document.querySelectorAll(".option").forEach(b=>{if(b.textContent===correct)b.classList.add("correct")});
  answers.push({item,opt,correct,ok});
  $("feedback").innerHTML=ok?"✅ 答對了！":`❌ 答錯了！正確答案：<b>${correct}</b>`;
  $("nextBtn").hidden=false;
}
function nextQuestion(){
  currentQuestion++;
  if(currentQuestion>=TOTAL) showResult(); else renderQuestion();
}
function showResult(){
  showScreen("resultScreen"); $("progressText").textContent=`第 ${currentLevel} 關完成`;
  const correct=answers.filter(a=>a.ok).length, wrong=TOTAL-correct, pct=Math.round(correct/TOTAL*100);
  $("resultTitle").textContent=`第 ${currentLevel} 關完成！`;
  $("resultScore").textContent=`${correct} / ${TOTAL} 分`;
  $("correctCount").textContent=correct; $("wrongCount").textContent=wrong; $("percent").textContent=pct+"%";
  $("resultMessage").textContent=pct===100?"太棒了！全部答對 🎉":pct>=80?"表現非常好！繼續保持 💪":pct>=60?"再複習一下錯題，你會更進步！":"別灰心，重新挑戰一次吧！";
  const wl=$("wrongList");
  if(wrong===0) wl.innerHTML="<h3>🎯 本關沒有錯題！</h3>";
  else wl.innerHTML="<h3>📖 錯題整理</h3>"+answers.filter(a=>!a.ok).map(a=>`<div class="wrong-item"><b>${a.item.word}</b> → ${a.correct}</div>`).join("");
  $("nextLevelBtn").textContent=currentLevel<4?"下一關 ➜":"完成全部關卡 🏆";
}
function goNextLevel(){if(currentLevel<4){currentLevel++;startLevel()}else showFinal()}
function showFinal(){
  const total=answers.length; // current level only, so show completion
  $("resultTitle").textContent="🎉 恭喜完成四個關卡！";
  $("resultScore").textContent="PVQC 英文挑戰完成";
  $("resultMessage").textContent=(studentName?studentName+"，":"")+"你已完成本次 4 關練習，可以回首頁再次挑戰。";
  $("nextLevelBtn").hidden=true;
}
function restartLevel(){startLevel()}
function backHome(){$("nextLevelBtn").hidden=false;showScreen("homeScreen");$("progressText").textContent="準備開始"}
function speakWord(word){
  if(!("speechSynthesis" in window)){alert("目前瀏覽器不支援英文語音播放，請改用 Chrome 或 Edge。");return}
  speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(word);u.lang="en-US";u.rate=.82;speechSynthesis.speak(u);
}
function speakCurrent(){if(levelQuestions[currentQuestion])speakWord(levelQuestions[currentQuestion].word)}
