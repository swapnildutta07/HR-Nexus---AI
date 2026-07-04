import dotenv from 'dotenv';
dotenv.config();

/**
 * Service to generate chat completions representing an HR assistant.
 * Leverages Google Gemini API if GEMINI_API_KEY is configured,
 * otherwise provides contextual mock HR assistant responses.
 * 
 * @param {string} prompt - User request query
 * @param {Object} employeeProfile - Object representing the active user's details
 */
export const getAIChatResponse = async (prompt, employeeProfile) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const name = employeeProfile ? `${employeeProfile.first_name} ${employeeProfile.last_name}` : 'Employee';
  const role = employeeProfile ? employeeProfile.role : 'Staff';
  const dept = employeeProfile ? employeeProfile.department : 'General';

  const systemInstruction = `You are HR Nexus AI, an intelligent, empathetic, and professional HR assistant.
You are chatting with employee '${name}' (Role: ${role}, Department: ${dept}).
Keep answers short, professional, and specific to HR, leave management, payroll, and attendance.`;

  // Try calling the Gemini model if the key exists
  if (apiKey) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  { text: `${systemInstruction}\n\nQuestion: ${prompt}` }
                ]
              }
            ]
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (textResponse) {
          return textResponse.trim();
        }
      } else {
        console.warn(`[aiService] Gemini API returned status ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('[aiService] Failed to complete Gemini API request, switching to local mock:', error.message);
    }
  }

  // Local helper response fallback
  const query = prompt.toLowerCase();

  if (query.includes('leave') || query.includes('vacation') || query.includes('time off')) {
    return `Hello ${name}, you can submit time-off requests directly from the "Leaves" tab. Your current leave balance is ${employeeProfile?.leave_balance ?? 0} days. Once submitted, it will route to your supervisor or HR for review.`;
  }

  if (query.includes('attendance') || query.includes('check-in') || query.includes('check out') || query.includes('present')) {
    return `Hello ${name}, you can log your presence daily in the "Attendance" tracker. Click "Check In" at the start of your shift and "Check Out" at the end of the day to keep your weekly grid current.`;
  }

  if (query.includes('payroll') || query.includes('salary') || query.includes('pay') || query.includes('slip')) {
    return `Hello ${name}, your payroll slips are compiled monthly and can be viewed or downloaded directly inside the "Payroll" tab. For specific compensation queries, feel free to contact the HR Finance team.`;
  }

  return `Hello ${name}, I am your HR Nexus AI assistant. I can help answer questions regarding your leaves, attendance, payroll, or employee details. (Note: Set 'GEMINI_API_KEY' in your environment to enable real AI generation).`;
};
