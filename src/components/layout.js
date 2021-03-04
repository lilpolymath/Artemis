import React from 'react';
import { Link } from 'gatsby';

const Layout = props => {
  const { children } = props;
  return (
    <div className={`site-wrapper`}>
      <main id='site-main' className='site-main'>
        <div id='swup' className='container transition-fade'>
          {children}
          <nav class='links'>
            <a href='https://blog.bolaji.de/' rel='noopener' target='blank'>
              Blog{' '}
              <svg
                width='23'
                height='24'
                viewBox='0 0 23 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path
                    d='M16.6574 5.6983C16.6572 5.6983 16.6569 5.69826 16.6566 5.69828L12.0923 5.70987C11.7504 5.71075 11.4738 6.00272 11.4747 6.36211C11.4755 6.72146 11.7533 7.01208 12.0953 7.01123L15.1597 7.0034L5.88777 16.7471C5.64596 17.0012 5.64596 17.4131 5.88777 17.6672C6.12957 17.9213 6.52159 17.9213 6.76339 17.6672L16.0353 7.9236L16.0279 11.1439C16.0271 11.5032 16.3036 11.7952 16.6456 11.7961C16.9876 11.7969 17.2654 11.5062 17.2662 11.147L17.2773 6.35047C17.2773 6.3502 17.2772 6.34992 17.2773 6.34962C17.2776 5.98958 16.9989 5.69791 16.6574 5.6983Z'
                    fill='white'
                  />
                </g>
              </svg>
            </a>
            <Link to='uses'>
              Uses{' '}
              <svg
                width='23'
                height='24'
                viewBox='0 0 23 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path
                    d='M16.6574 5.6983C16.6572 5.6983 16.6569 5.69826 16.6566 5.69828L12.0923 5.70987C11.7504 5.71075 11.4738 6.00272 11.4747 6.36211C11.4755 6.72146 11.7533 7.01208 12.0953 7.01123L15.1597 7.0034L5.88777 16.7471C5.64596 17.0012 5.64596 17.4131 5.88777 17.6672C6.12957 17.9213 6.52159 17.9213 6.76339 17.6672L16.0353 7.9236L16.0279 11.1439C16.0271 11.5032 16.3036 11.7952 16.6456 11.7961C16.9876 11.7969 17.2654 11.5062 17.2662 11.147L17.2773 6.35047C17.2773 6.3502 17.2772 6.34992 17.2773 6.34962C17.2776 5.98958 16.9989 5.69791 16.6574 5.6983Z'
                    fill='white'
                  />
                </g>
              </svg>
            </Link>
            <Link to='about'>
              About Me{' '}
              <svg
                width='23'
                height='24'
                viewBox='0 0 23 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path
                    d='M16.6574 5.6983C16.6572 5.6983 16.6569 5.69826 16.6566 5.69828L12.0923 5.70987C11.7504 5.71075 11.4738 6.00272 11.4747 6.36211C11.4755 6.72146 11.7533 7.01208 12.0953 7.01123L15.1597 7.0034L5.88777 16.7471C5.64596 17.0012 5.64596 17.4131 5.88777 17.6672C6.12957 17.9213 6.52159 17.9213 6.76339 17.6672L16.0353 7.9236L16.0279 11.1439C16.0271 11.5032 16.3036 11.7952 16.6456 11.7961C16.9876 11.7969 17.2654 11.5062 17.2662 11.147L17.2773 6.35047C17.2773 6.3502 17.2772 6.34992 17.2773 6.34962C17.2776 5.98958 16.9989 5.69791 16.6574 5.6983Z'
                    fill='white'
                  />
                </g>
              </svg>
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Layout;
