import {Job, workHistory} from "../assets/workHistory.tsx"
import '../styles/resume.sass'

function Resume() {
  return (
    <section>
      {workHistory.map(({ title, company, dates, info }: Job) => (
        <article>
          <h3>
            <span className="job-title">
              {title} {company}
            </span>
            <span className="dates"> {dates} </span>
          </h3>

          <ul>
            {info.map((bulletPoint: string) => (
              <li> {bulletPoint} </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Resume;
