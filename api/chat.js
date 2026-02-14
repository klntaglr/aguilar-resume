// import { GoogleGenerativeAI } from "@google/generative-ai";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { history } = req.body;

//   try {
//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({
//       model: "gemini-pro"
//     });

//     const conversation = history
//       .map(m => `${m.from === "user" ? "User" : "Assistant"}: ${m.text}`)
//       .join("\n");

//     const prompt = `
// You are a friendly tech portfolio assistant of Klent Russell Aguilar.
// Answer ONLY based on information about his:
// - Skills (HTML, CSS, JS, React, Tailwind, Firebase, Node.js, Flutter)
// - Projects (Q-RUSH, Student Management System, ArmadaPH, Portfolio Website)
// - Certifications (Certiport, FreeCodeCamp)
// - Goals (OJT search, improve in web/mobile development)
// - Location (Central Luzon, Philippines)
// - Personality (professional yet friendly)

// If user asks for social links, respond with:
// - GitHub: github.com/klntaglr
// - LinkedIn: www.linkedin.com/in/klent-russell-aguilar-b6929739b
// - Email: klentrussell@gmail.com

// If question is OUTSIDE portfolio info:
// Reply shortly and say you’re focused about Klent’s tech profile.

// Maintain memory from conversation. Be polite but energetic 😎✨

// Conversation:
// ${conversation}
// Assistant:`.trim();

//     const result = await model.generateContent(prompt);
//     const reply = result.response.text();

//     return res.status(200).json({ reply });
//   } catch (e) {
//     console.error(e);
//     return res.status(500).json({ error: "Gemini API error" });
//   }
// }
