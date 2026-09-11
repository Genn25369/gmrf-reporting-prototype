const PROMPTS = [
  { id: "did", q: "In your own words, what did you actually do in this period?" },
  { id: "reach", q: "Who or what did you reach, in which places — people or hectares? How do you know?" },
  { id: "defend", q: "What number would you defend to a funder today, and what is still a target?" },
  { id: "shock", q: "Did a heat spell, drought, flood, or storm hit during the period? What happened to the people or place you work with?" },
  { id: "change", q: "What changed in how the community or local authority prepares, decides, or pays?" },
  { id: "lesson", q: "What would you not do again? What is worth copying elsewhere?" },
  { id: "left", q: "What did you publish or leave behind (plan, map, video, agreement)?" },
  { id: "money", q: "Any money beyond this grant that moved because of the work?" }
];

const GRANTS = {
  P1: {
    id: "P1",
    name: "Rift Valley climate-smart livelihoods",
    org: "County farmer cooperative + local NGO",
    countries: ["KE"],
    pillars: ["drought", "heat"],
    modality: ["finance", "community"],
    system: "rural",
    primary: "people",
    pledgedPeople: 12500,
    pledgedHa: 3200,
    cyclePeople: 4800,
    cycleHa: 1800,
    indirect: null,
    disbursed: 310000,
    committed: 850000,
    status: "reporting_due",
    verified: false,
    shock: true,
    shockType: "drought",
    core3: "closed",
    otherUnit: { label: "groups", value: 40 },
    draft: {
      did: "We put out 2,100 input loans through the cooperative, kept 1,800 hectares on the dry-season package, and ran 12 demo plots with county extension. Forty farmer groups are the delivery units — we are not counting groups as people.",
      reach: "Kenya, Elgeyo Marakwet. About 4,800 people this year from the loan and demo registers. The 12,500 is still the pledge, not this year's count. 1,800 hectares under the package. No indirect people written down.",
      defend: "I would defend 4,800 people and 1,800 hectares and $310,000 disbursed. 12,500 people and 3,200 hectares are still targets.",
      shock: "Yes. The long rains failed from June to August in Elgeyo Marakwet. That is why the second loan tranche slipped.",
      change: "We dropped two high-default villages and added a savings-group guarantee. Farmers sit on the steering group. Design is not fully community-led yet.",
      lesson: "Group-guaranteed loans renewed after the dry season; individual unsecured loans did not. Demo plots only changed practice where the lead farmer already sat on the board. Do not treat training attendance as resilience. Neighbouring wards asked for the guarantee model.",
      left: "A dry-season loan circular for the cooperative board (not public yet) and photo logs from the 12 plots.",
      money: "No follow-on capital this cycle. $310,000 of the $850,000 grant has moved."
    }
  },
  P2: {
    id: "P2",
    name: "Incremental climate-safe housing labs",
    org: "Housing NGO network (6-country platform)",
    countries: ["CL","AR","PY","PE","CO","MX"],
    pillars: ["heat"],
    modality: ["community"],
    system: "urban",
    primary: "people",
    pledgedPeople: 420,
    pledgedHa: null,
    cyclePeople: 180,
    cycleHa: null,
    indirect: 3000,
    disbursed: 190000,
    committed: 420000,
    status: "reporting_due",
    verified: false,
    shock: true,
    shockType: "storm",
    core3: "closed",
    otherUnit: { label: "m2", value: 1850 },
    draft: {
      did: "Forty-eight homes finished construction this year. Sixty-five from last season are already occupied. Heat detailing is still thin. Four of six cities have municipal MoUs.",
      reach: "180 people in homes completed this calendar year across CL, AR, PY, PE, CO, MX. Cumulative occupied homes sit at 245 people. About 3,000 neighbours live in the lab catchments — those are indirect, not reached. 1,850 m2 of upgraded floor this year.",
      defend: "180 people this year and 48 homes and $190,000 disbursed. The 420-people pledge is still a target. I will not defend a heat-performance number; we did not measure it.",
      shock: "Yes. A named coastal storm in March hit two lab cities. Occupancy ninety days later has not been surveyed yet.",
      change: "Permit delays pushed 17 homes into next year. We hired a paid local supervisor where volunteer quality drifted.",
      lesson: "Raised plinths and strapped roofs stayed occupied. Cool-roof paint alone did not change the flood outcome. Two non-grant cities asked for the lab charter.",
      left: "Lab charter template annexed to four city MoUs. The 90-day occupancy protocol is not written yet.",
      money: "City in-kind only. No new outside capital. $190,000 of $420,000 disbursed."
    }
  },
  P3: {
    id: "P3",
    name: "Coastal buffer restoration with local enterprises",
    org: "Regional conservation coalition + two community enterprises",
    countries: ["JM","BZ"],
    pillars: ["coastal"],
    modality: ["nbs", "community"],
    system: "coastal",
    primary: "hectares",
    pledgedPeople: null,
    pledgedHa: 640,
    cyclePeople: null,
    cycleHa: 210,
    indirect: 8400,
    disbursed: 220000,
    committed: 600000,
    status: "reporting_due",
    verified: false,
    shock: true,
    shockType: "storm",
    core3: "closed",
    otherUnit: { label: "metres", value: 420 },
    quality: "46% survival at month 10 on the first 90 ha",
    draft: {
      did: "We planted or restocked 210 hectares this year and contracted two community enterprises for the nursery and patrol. A custody agreement for one bay is drafted, not signed.",
      reach: "Jamaica and Belize, two bay systems. 210 hectares this year against a 640-hectare plan. We are not converting the 8,400 people who live behind the buffer into a people-reached number. 420 metres of fringe toe protection. Survival on the first 90 hectares is 46% at month 10.",
      defend: "210 hectares and 46% survival and $220,000 disbursed. I would not defend a people-more-resilient figure. The 640 hectares is still the plan.",
      shock: "Yes. A September surge overtopped one restored fringe. Patrols continued; volunteer days did not.",
      change: "Upstream sediment killed 18 hectares of the first planting. We switched to nursery-grown seedlings and a later planting window.",
      lesson: "Nursery-grown seedlings beat wildings. Survival is the quality number, not hectares planted. The second bay asked for the enterprise contract; harvest rights have to come first.",
      left: "Year-1 restoration ledger promised public next quarter. Draft custody agreement, unsigned.",
      money: "No follow-on capital. $220,000 of $600,000 has moved."
    }
  }
};

const PILLAR_LABEL = { heat: "Extreme heat", drought: "Drought & water", coastal: "Coastal" };
const STATUS_LABEL = {
  received: "Received", in_review: "In review", awarded: "Awarded",
  disbursed: "Disbursed", reporting_due: "Reporting due",
  verified: "Verified", closed: "Closed", declined: "Declined"
};

let current = "P1";
let step = 0;
const answers = { P1: {}, P2: {}, P3: {} };

function fmt(n) {
  if (n == null || n === "") return "\u2014";
  return Number(n).toLocaleString("en-US");
}
function money(n) { return n == null ? "\u2014" : "$" + fmt(n); }

function renderGrantPick() {
  const box = document.getElementById("grantPick");
  box.innerHTML = "";
  Object.values(GRANTS).forEach(g => {
    const b = document.createElement("button");
    b.className = g.id === current ? "on" : "";
    b.innerHTML = `<strong>${g.id}</strong> \u00b7 ${g.name}<br><span class="tiny">${g.countries.join(", ")} \u00b7 ${g.primary}</span>`;
    b.onclick = () => { current = g.id; step = Object.keys(answers[current]).length; renderChat(); renderMapping(); renderGrantPick(); };
    box.appendChild(b);
  });
}

function renderChat() {
  const chat = document.getElementById("chat");
  chat.innerHTML = "";
  const g = GRANTS[current];
  addBubble("bot", "GMRF", `This is the year-1 conversation for <strong>${g.name}</strong>. ${g.org}. We will not ask you for a Race to Resilience cluster first.`);
  const keys = Object.keys(answers[current]);
  keys.forEach(id => {
    const p = PROMPTS.find(x => x.id === id);
    addBubble("bot", "GMRF", p.q);
    addBubble("me", "You", answers[current][id]);
  });
  if (step < PROMPTS.length) {
    addBubble("bot", "GMRF", PROMPTS[step].q);
  } else {
    addBubble("bot", "GMRF", "That is a full cycle draft. Secretariat still has to verify before any number is on the funder dashboard. CORE3 stays closed on this record.");
  }
}

function addBubble(kind, who, html) {
  const d = document.createElement("div");
  d.className = "bubble " + (kind === "me" ? "me" : "bot");
  d.innerHTML = `<div class="who">${who}</div>${html}`;
  document.getElementById("chat").appendChild(d);
}

function mapGrant(g, a) {
  const rows = [];
  rows.push(["GMRF.01 pillars", g.pillars.map(p => PILLAR_LABEL[p]).join(" \u00b7 ")]);
  rows.push(["GMRF.02 modality", g.modality.join(" \u00b7 ")]);
  rows.push(["GMRF.03 system", g.system]);
  rows.push(["Primary unit", g.primary]);
  if (a.did) rows.push(["CYC.03 activity", "captured"]);
  if (a.shock) {
    const yes = /yes|drought|storm|flood|heat|surge|rains failed/i.test(a.shock);
    rows.push(["CYC.05 shock this period", yes ? "yes" : "unclear"]);
    if (yes) rows.push(["CYC.06 shock type", g.shockType]);
  }
  if (a.reach || a.defend) {
    if (g.primary === "hectares") {
      rows.push(["This-cycle hectares", fmt(g.cycleHa)]);
      rows.push(["People reached", "not required \u2014 nature-first"]);
      rows.push(["Indirect people (quarantined)", fmt(g.indirect)]);
    } else {
      rows.push(["This-cycle people", fmt(g.cyclePeople)]);
      rows.push(["This-cycle hectares", g.cycleHa ? fmt(g.cycleHa) : "\u2014"]);
      if (g.indirect) rows.push(["Indirect people (quarantined)", fmt(g.indirect)]);
    }
  }
  if (g.otherUnit) rows.push(["CYC.12/13 other unit", g.otherUnit.value + " " + g.otherUnit.label]);
  if (g.quality) rows.push(["CYC.11 restoration quality", g.quality]);
  if (a.lesson) rows.push(["CYC.08 lessons", "captured"]);
  if (a.lesson && /asked|charter|neighbouring|second bay/i.test(a.lesson)) rows.push(["CYC.09 replication", "signal, not a counted instance"]);
  if (a.left) rows.push(["CYC.10 products", "listed \u2014 see child table"]);
  if (a.money) rows.push(["FIN.02 disbursed", money(g.disbursed)]);
  rows.push(["CAT.01 follow-on", "none this cycle"]);
  rows.push(["CORE3 publish gate", "closed \u2014 shock named, no endline + comparison"]);
  rows.push(["MEL.03 verification", g.verified ? "verified" : "unverified"]);
  return rows;
}

function renderMapping() {
  const g = GRANTS[current];
  const a = answers[current];
  const rows = mapGrant(g, a);
  document.getElementById("mapping").innerHTML =
    `<div class="mapbox">` +
    rows.map(([k,v]) => `<div><code>${k}</code> \u2014 ${v}</div>`).join("") +
    `</div>`;
}

document.getElementById("send").onclick = () => {
  const text = document.getElementById("answer").value.trim();
  if (!text || step >= PROMPTS.length) return;
  answers[current][PROMPTS[step].id] = text;
  document.getElementById("answer").value = "";
  step += 1;
  renderChat();
  renderMapping();
};

document.getElementById("draft").onclick = () => {
  const g = GRANTS[current];
  if (step >= PROMPTS.length) return;
  document.getElementById("answer").value = g.draft[PROMPTS[step].id];
};

function renderQueue() {
  const box = document.getElementById("queue");
  box.innerHTML = "";
  Object.values(GRANTS).forEach(g => {
    const card = document.createElement("div");
    card.className = "card";
    const mapped = mapGrant(g, Object.keys(answers[g.id]).length ? answers[g.id] : g.draft);
    const core1 = g.primary === "hectares"
      ? `${fmt(g.cycleHa)} ha this cycle`
      : `${fmt(g.cyclePeople)} people this cycle`;
    card.innerHTML = `
      <h3>${g.id} \u00b7 ${g.name}
        <span class="pill ${g.verified ? "ok" : "warn"}">${g.verified ? "verified" : "unverified"}</span>
        <span class="pill off">CORE3 closed</span>
      </h3>
      <p class="tiny">${g.org} \u00b7 ${g.countries.join(", ")} \u00b7 ${STATUS_LABEL[g.status]}</p>
      <p><strong>CORE1 candidate:</strong> ${core1}. Disbursed ${money(g.disbursed)}.</p>
      <p class="tiny">Shock: ${g.shockType}. Endline: missing. Comparison: missing. Dashboard must not show people more resilient.</p>
      <div class="mapbox">${mapped.map(([k,v]) => `<div><code>${k}</code> \u2014 ${v}</div>`).join("")}</div>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="act teal" data-act="verify" data-id="${g.id}">Verify CORE1 + finance</button>
        <button class="ghost" data-act="back" data-id="${g.id}">Send back</button>
        <button class="act brick" data-act="core3" data-id="${g.id}">Do not unlock CORE3</button>
      </div>
    `;
    box.appendChild(card);
  });
  box.querySelectorAll("button[data-act]").forEach(btn => {
    btn.onclick = () => {
      const g = GRANTS[btn.dataset.id];
      if (btn.dataset.act === "verify") {
        g.verified = true;
        g.status = "verified";
      } else if (btn.dataset.act === "back") {
        g.verified = false;
        g.status = "reporting_due";
      }
      renderQueue();
      renderFunder();
    };
  });
}

function unique(list) { return [...new Set(list)]; }

function renderFunderFilters() {
  const pillars = unique(Object.values(GRANTS).flatMap(g => g.pillars));
  const countries = unique(Object.values(GRANTS).flatMap(g => g.countries));
  const statuses = unique(Object.values(GRANTS).map(g => g.status));
  const fill = (sel, items, labels) => {
    const el = document.getElementById(sel);
    const cur = el.value;
    el.innerHTML = `<option value="">${el.options[0].text}</option>` +
      items.map(i => `<option value="${i}">${labels ? labels[i] || i : i}</option>`).join("");
    el.value = cur;
  };
  fill("fPillar", pillars, PILLAR_LABEL);
  fill("fCountry", countries);
  fill("fStatus", statuses, STATUS_LABEL);
}

function visibleGrants() {
  const p = document.getElementById("fPillar").value;
  const c = document.getElementById("fCountry").value;
  const s = document.getElementById("fStatus").value;
  return Object.values(GRANTS).filter(g =>
    (!p || g.pillars.includes(p)) &&
    (!c || g.countries.includes(c)) &&
    (!s || g.status === s)
  );
}

function renderFunder() {
  renderFunderFilters();
  const rows = visibleGrants();
  const people = rows.reduce((n,g) => n + (g.verified && g.cyclePeople ? g.cyclePeople : 0), 0);
  const ha = rows.reduce((n,g) => n + (g.verified && g.cycleHa ? g.cycleHa : 0), 0);
  const usd = rows.reduce((n,g) => n + (g.verified ? g.disbursed : 0), 0);
  document.getElementById("kpis").innerHTML = `
    <div class="kpi"><b>${rows.length}</b><span>grants in this filter</span></div>
    <div class="kpi"><b>${fmt(people)}</b><span>verified people this cycle</span></div>
    <div class="kpi"><b>${fmt(ha)}</b><span>verified hectares this cycle</span></div>
    <div class="kpi"><b>${money(usd)}</b><span>verified disbursed</span></div>
    <div class="kpi"><b>0</b><span>people more resilient (CORE3)</span></div>
  `;
  const tb = document.querySelector("#ftable tbody");
  tb.innerHTML = rows.map(g => {
    const mag = !g.verified
      ? `<span class="pill warn">hidden until verified</span>`
      : g.primary === "hectares"
        ? `<strong>${fmt(g.cycleHa)} ha</strong><div class="tiny">people not required</div>`
        : `<strong>${fmt(g.cyclePeople)} people</strong>${g.cycleHa ? `<div class="tiny">+ ${fmt(g.cycleHa)} ha practice</div>` : ""}`;
    return `<tr>
      <td><strong>${g.name}</strong><div class="tiny">${g.id} \u00b7 ${g.org}</div></td>
      <td>${g.pillars.map(p => PILLAR_LABEL[p]).join("<br>")}</td>
      <td>${g.countries.join(", ")}</td>
      <td><span class="pill">${STATUS_LABEL[g.status]}</span></td>
      <td>${mag}</td>
      <td><span class="pill off">off dashboard</span></td>
    </tr>`;
  }).join("");
}

["fPillar","fCountry","fStatus"].forEach(id => {
  document.getElementById(id).addEventListener("change", renderFunder);
});

document.querySelectorAll(".roles button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".roles button").forEach(b => b.classList.remove("on"));
    btn.classList.add("on");
    ["grantee","secret","funder"].forEach(v => {
      document.getElementById("view-" + v).classList.toggle("hidden", btn.dataset.view !== v);
    });
    if (btn.dataset.view === "secret") renderQueue();
    if (btn.dataset.view === "funder") renderFunder();
  };
});

renderGrantPick();
renderChat();
renderMapping();
renderQueue();
renderFunder();
