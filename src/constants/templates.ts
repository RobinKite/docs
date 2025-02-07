export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/documents-template/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/documents-template/software-proposal.svg",
    initialContent: `<header>
    <h1>Software Development Proposal</h1>
    <p><strong>Date:</strong> [Insert Date]</p>
    <p><strong>Prepared for:</strong> [Client Name]</p>
    <p><strong>Prepared by:</strong> [Your Company Name]</p>
  </header>

  <section>
    <h2>Introduction</h2>
    <p>This document outlines the proposal for the development of [Project Name]. It includes the scope, objectives,
      timeline, and estimated cost of the project.</p>
  </section>

  <section>
    <h2>Project Overview</h2>
    <p><strong>Project Name:</strong> [Project Name]</p>
    <p><strong>Project Description:</strong> [Brief project description]</p>
    <p><strong>Client Requirements:</strong> [Key requirements]</p>
  </section>

  <footer>
    <p><strong>Contact Information:</strong></p>
    <p>[Your Name]</p>
    <p>[Your Email]</p>
    <p>[Your Phone Number]</p>
  </footer>`,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/documents-template/project-proposal.svg",
    initialContent: `<header>
        <h1>Project Proposal</h1>
        <p><strong>Date:</strong> [Insert Date]</p>
        <p><strong>Prepared for:</strong> [Client Name]</p>
        <p><strong>Prepared by:</strong> [Your Company Name]</p>
    </header>
    
    <section>
        <h2>Introduction</h2>
        <p>This document outlines the proposal for the development of [Project Name]. It includes the scope, objectives, timeline, and estimated cost of the project.</p>
    </section>
    
    <section>
        <h2>Project Overview</h2>
        <p><strong>Project Name:</strong> [Project Name]</p>
        <p><strong>Project Description:</strong> [Brief project description]</p>
        <p><strong>Client Requirements:</strong> [Key requirements]</p>
    </section>
    
    <footer>
        <p><strong>Contact Information:</strong></p>
        <p>[Your Name]</p>
        <p>[Your Email]</p>
        <p>[Your Phone Number]</p>
    </footer>`,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/documents-template/business-letter.svg",
    initialContent: `<header>
        <h1>Business Letter</h1>
        <address>
            <p><strong>[Your Name]</strong></p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email] | [Your Phone Number]</p>
            <p><strong>Date:</strong> [Insert Date]</p>
        </address>
    </header>
    
    <section>
        <h2>Recipient Information</h2>
        <address>
            <p><strong>[Recipient's Name]</strong></p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>[City, State, ZIP Code]</p>
        </address>
    </section>
    
    <main>
        <h2>Letter Content</h2>
        <p><strong>Dear [Recipient's Name],</strong></p>
        <section>
            <h3>Introduction</h3>
            <p>[Briefly introduce yourself and the purpose of the letter.]</p>
        </section>
        <section>
            <h3>Body</h3>
            <p>[Explain the details of your message, providing necessary context and information.]</p>
        </section>
        <section>
            <h3>Conclusion</h3>
            <p>[Summarize your points and include a call to action or next steps.]</p>
        </section>
    </main>
    
    <footer>
        <p><strong>Sincerely,</strong></p>
        <p>[Your Name]</p>
    </footer>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/documents-template/resume.svg",
    initialContent: `<header>
        <h1>[Your Name]</h1>
        <p>[Your Job Title]</p>
        <address>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email] | [Your Phone Number]</p>
        </address>
    </header>
    
    <section>
        <h2>Summary</h2>
        <p>[A brief professional summary highlighting your experience, skills, and career goals.]</p>
    </section>
    
    <section>
        <h2>Work Experience</h2>
        <article>
            <h3>[Job Title] - [Company Name]</h3>
            <p><strong>[Start Date] - [End Date]</strong></p>
            <p>[Brief description of responsibilities and achievements.]</p>
        </article>
        <article>
            <h3>[Job Title] - [Company Name]</h3>
            <p><strong>[Start Date] - [End Date]</strong></p>
            <p>[Brief description of responsibilities and achievements.]</p>
        </article>
    </section>
    
    <section>
        <h2>Education</h2>
        <article>
            <h3>[Degree] - [Institution Name]</h3>
            <p><strong>[Year of Graduation]</strong></p>
        </article>
    </section>
    
    <section>
        <h2>Skills</h2>
        <ul>
            <li>[Skill 1]</li>
            <li>[Skill 2]</li>
            <li>[Skill 3]</li>
            <li>[Skill 4]</li>
        </ul>
    </section>
    
    <section>
        <h2>Certifications</h2>
        <ul>
            <li>[Certification Name] - [Issuing Organization] ([Year])</li>
        </ul>
    </section>
    
    <footer>
        <p><strong>References available upon request.</strong></p>
    </footer>`,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/documents-template/cover-letter.svg",
    initialContent: `<header>
        <h1>Cover Letter</h1>
        <address>
            <p><strong>[Your Name]</strong></p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email] | [Your Phone Number]</p>
            <p><strong>Date:</strong> [Insert Date]</p>
        </address>
    </header>
    
    <section>
        <h2>Recipient Information</h2>
        <address>
            <p><strong>[Recipient's Name]</strong></p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>[City, State, ZIP Code]</p>
        </address>
    </section>
    
    <main>
        <h2>Letter Content</h2>
        <p><strong>Dear [Recipient's Name],</strong></p>
        <section>
            <h3>Introduction</h3>
            <p>[Briefly introduce yourself and the purpose of the letter.]</p>
        </section>
        <section>
            <h3>Body</h3>
            <p>[Explain the details of your message, providing necessary context and information.]</p>
        </section>
        <section>
            <h3>Conclusion</h3>
            <p>[Summarize your points and include a call to action or next steps.]</p>
        </section>
    </main>
    
    <footer>
        <p><strong>Sincerely,</strong></p>
        <p>[Your Name]</p>
    </footer>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/documents-template/letter.svg",
    initialContent: `<header>
        <h1>Letter</h1>
        <address>
            <p><strong>[Your Name]</strong></p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email] | [Your Phone Number]</p>
            <p><strong>Date:</strong> [Insert Date]</p>
        </address>
    </header>
    
    <section>
        <h2>Recipient Information</h2>
        <address>
            <p><strong>[Recipient's Name]</strong></p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>[City, State, ZIP Code]</p>
        </address>
    </section>
    
    <main>
        <h2>Letter Content</h2>
        <p><strong>Dear [Recipient's Name],</strong></p>
        <section>
            <h3>Introduction</h3>
            <p>[Briefly introduce yourself and the purpose of the letter.]</p>
        </section>
        <section>
            <h3>Body</h3>
            <p>[Explain the details of your message, providing necessary context and information.]</p>
        </section>
        <section>
            <h3>Conclusion</h3>
            <p>[Summarize your points and include a call to action or next steps.]</p>
        </section>
    </main>
    
    <footer>
        <p><strong>Sincerely,</strong></p>
        <p>[Your Name]</p>
    </footer>`,
  },
];
