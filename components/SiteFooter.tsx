import { site } from '@/content/site'
import { CvAction } from './CvAction'

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="row">
          <div className="row-main">
            <h2 id="contact-title">Contact</h2>
            <p>{site.contactNote}</p>
            <dl className="contact-list">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={site.linkedin}>linkedin.com/in/salahudeen-matine</a>
                </dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={site.github}>github.com/salahudeenmatine</a>
                </dd>
              </div>
              <div>
                <dt>CV</dt>
                <dd>
                  <CvAction className="" />
                </dd>
              </div>
            </dl>
          </div>
          <div className="row-margin">
            <p className="note">
              <span className="note-label">{site.location}</span> {site.availability}.
            </p>
          </div>
        </div>
        <p className="colophon">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
