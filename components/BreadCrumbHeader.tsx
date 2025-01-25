'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb';
import { MobileSidebar } from './Sidebar';

const BreadCrumbHeader = () => {
  const pathName = usePathname();
  const paths = pathName === '/' ? [''] : pathName?.split('/');

  const buildPath = (index: number) =>
    paths.slice(0, index + 1).join('/') || '/';

  return (
    <div className='flex items-center flex-start'>
      <MobileSidebar />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className='capitalize hover:underline'
                  href={buildPath(index)}
                  aria-current={index === paths.length - 1 ? 'page' : undefined}
                >
                  {path === '' ? 'Home' : path.replaceAll('-', ' ')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < paths.length - 1 && <span className='mx-2'>›</span>}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbHeader;
