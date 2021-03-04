import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GitHub, Twitter, Youtube, Linkedin } from 'react-feather';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../style/all.scss';

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO
        title='Home'
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />

      {data.site.siteMetadata.description && (
        <header className='page-head'>
          <h2 className='page-head-title'>Hey there, I'm Bolaji!</h2>
          <p className='page-head-description'>
            {data.site.siteMetadata.description}
          </p>
          <div className='social-links'>
            <a
              target='_blank'
              aria-label='Twitter profile'
              rel='noopener noreferrer nofollow'
              href='https://twitter.com/Bolaji___'
            >
              <Twitter />
            </a>
            <a
              target='_blank'
              aria-label='GitHub profile'
              rel='noopener noreferrer nofollow'
              href='https://github.com/BolajiOlajide'
            >
              <GitHub />
            </a>
            <a
              target='_blank'
              aria-label='My Youtube channel'
              rel='noopener noreferrer nofollow'
              href='https://www.youtube.com/channel/UCynulnc9t2YbpMENu0npmMA'
            >
              <Youtube />
            </a>
            <a
              target='_blank'
              aria-label='My LinkedIn profile'
              rel='noopener noreferrer nofollow'
              href='https://www.linkedin.com/in/bolaji-olajide-95b08777/'
            >
              <Linkedin />
            </a>
          </div>
        </header>
      )}
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
