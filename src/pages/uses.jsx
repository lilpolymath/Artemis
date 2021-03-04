import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../style/all.scss';

const UsesPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title='Uses' />

      <article className='post-content page-template no-image'>
        <section className='post-content-body'>
          <h1>Uses</h1>
          <p>
            Here's a list of things I use for my day to day work and activities.
            I'll try to always update this list so it reflects the current tool
            I'm using at the moment.
          </p>

          <h2>
            Editor & Terminal{' '}
            <span role='img' aria-label='keyboard'>
              {' '}
              ⌨️
            </span>
          </h2>

          <ul>
            <li>
              Editor:{' '}
              <a
                href='https://code.visualstudio.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                VSCode
              </a>
            </li>

            <li>
              Color Theme: I usually switch between{' '}
              <a
                href='https://marketplace.visualstudio.com/items?itemName=cooproton.folabelle'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Folabelle by myself
              </a>
              ,{' '}
              <a
                href='https://marketplace.visualstudio.com/items?itemName=sdras.night-owl'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Night Owl by Sarah Drasner
              </a>{' '}
              and{' '}
              <a
                href='https://marketplace.visualstudio.com/items?itemName=karyfoundation.theme-karyfoundation-themes'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Kary Pro Colors － Minimal Dark
              </a>
            </li>

            <li>
              Font: I am a big fan of{' '}
              <a
                href='https://www.typography.com/fonts/operator/styles'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Operator Mono
              </a>
              . I use it for almost everything on my PC.
            </li>

            <li>
              Terminal: You'll find me mostly using{' '}
              <a
                href='https://www.iterm2.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                iTerm
              </a>
              .
            </li>
          </ul>

          <h2>
            Desktop Apps{' '}
            <span role='img' aria-label='desktop'>
              {' '}
              🖥️
            </span>
          </h2>

          <ul>
            <li>
              <a
                href='https://bear.app'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Bear
              </a>
            </li>

            <li>
              <a
                href='https://www.notion.so'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Notion
              </a>
            </li>

            <li>
              <a
                href='https://slack.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Slack
              </a>
            </li>

            <li>
              <a
                href='https://todoist.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Todoist
              </a>
            </li>

            <li>
              <a
                href='https://www.grammarly.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Grammarly
              </a>
            </li>

            <li>
              <a
                href='https://www.figma.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Figma
              </a>
            </li>

            <li>
              <a
                href='https://spotify.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Spotify
              </a>
            </li>

            <li>
              <a
                href='http://tableplus.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                TablePlus
              </a>
            </li>

            <li>
              <a
                href='https://eggerapps.at/postico/'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Postico
              </a>
            </li>
          </ul>

          <h2>
            Recording{' '}
            <span role='img' aria-label='microphone and camera'>
              {' '}
              🎤📸
            </span>
          </h2>

          <ul>
            <li>
              <a
                href='https://www.blackmagicdesign.com/products/davinciresolve/'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Da Vinci Resolve
              </a>
            </li>

            <li>
              <a
                href='https://www.apple.com/mac/garageband/'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                GarageBand
              </a>
            </li>

            <li>
              <a
                href='https://getkap.co'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Kap
              </a>
            </li>

            <li>
              <a
                href='https://obsproject.com'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                OBS
              </a>
            </li>

            <li>
              <a
                href='https://www.amazon.com/Blue-Yeti-USB-Microphone-Blackout/dp/B00N1YPXW2/ref=sr_1_2?dchild=1&keywords=blue+yeti&qid=1596163749&sr=8-2'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Blue Yeti USB Mic{' '}
              </a>
            </li>
          </ul>

          <h2>
            Desk Setup{' '}
            <span role='img' aria-label='desk setup'>
              {' '}
              👩‍💻💻
            </span>
          </h2>

          <ul>
            <li>
              <a
                href='https://www.apple.com/ng/newsroom/2019/11/apple-introduces-16-inch-macbook-pro-the-worlds-best-pro-notebook/'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                MacBook Pro 16" 2019
              </a>
            </li>

            <li>
              <a
                href='https://www.amazon.com/Samsung-32-inch-Curved-Monitor-LC32F391FWNXZA/dp/B01D3BDXQA'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Samsung 32" Curved Monitor
              </a>
            </li>

            <li>
              <a
                href='https://taeillo.com/products/amakisi-table-without-drawer'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Amakisi Table (from Taeillo)
              </a>
            </li>

            <li>
              <a
                href='https://www.amazon.com/Lautsprecher-Anker-Technologie-Akkulaufzeit-Wasserdichte/dp/B07CSPLGV9/ref=sr_1_8?dchild=1&keywords=anker+speaker&qid=1596163394&s=electronics&sr=1-8'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Anker Soundcore Portable Bluetooth Speakers
              </a>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <UsesPage location={props.location} data={data} {...props} />
    )}
  />
);
