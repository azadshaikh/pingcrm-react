import { Link } from '@inertiajs/react';
import { Pagination as BSPagination } from 'react-bootstrap';
import classNames from 'classnames';

interface PaginationProps {
  links: PaginationItem[];
}

export default function Pagination({ links = [] }: PaginationProps) {
  /**
   * If there are only 3 links, it means there are no previous or next pages.
   * So, we don't need to render the pagination.
   */
  if (links.length === 3) return null;

  return (
    <BSPagination className="mt-4 flex-wrap">
      {links?.map(link => {
        return link?.url === null ? (
          <PageInactive key={link.label} label={link.label} />
        ) : (
          <PaginationItem key={link.label} {...link} />
        );
      })}
    </BSPagination>
  );
}

interface PaginationItem {
  url: null | string;
  label: string;
  active: boolean;
}

function PaginationItem({ active, label, url }: PaginationItem) {
  /**
   * Note: In general you should be aware when using `dangerouslySetInnerHTML`.
   *
   * In this case, `label` from the API is a string, so it's safe to use it.
   * It will be either `&laquo; Previous` or `Next &raquo;`
   */
  return (
    <BSPagination.Item
      active={active}
      className={classNames('mb-2', { 'bg-white': active })}
      linkAs={Link}
      linkProps={{ href: url as string }}
    >
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </BSPagination.Item>
  );
}

function PageInactive({ label }: Pick<PaginationItem, 'label'>) {
  /**
   * Note: In general you should be aware when using `dangerouslySetInnerHTML`.
   *
   * In this case, `label` from the API is a string, so it's safe to use it.
   * It will be either `&laquo; Previous` or `Next &raquo;`
   */
  return (
    <BSPagination.Item disabled className="mb-2">
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </BSPagination.Item>
  );
}
