import { ReactNode } from 'react';
import { cn } from '../../utils';

interface GridLayoutProps<T> {
  /**
   * Additional class names for the container element.
   */
  className?: string;

  /**
   * Additional class names for the grid container element.
   */
  gridClassName?: string;

  /**
   * Title to display at the top of the grid.
   */
  title: string;

  /**
   * List of items to display.
   */
  items: T[];

  /**
   *
   * Function to render each item in the grid.
   */
  renderItem: (item: T) => ReactNode;
}

export const GridLayout = <T,>({ className, gridClassName, title, items, renderItem }: GridLayoutProps<T>) => {
  const classes = {
    container: cn('min-h-screen bg-gray-900 px-4 py-12 sm:px-6 lg:px-8', className),
    gridContainer: cn('grid grid-cols-1 gap-6', 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4', gridClassName),
  };

  /* Renders each item in the grid. */
  const renderGridItems = () => items.map((item) => renderItem(item));

  return (
    <div className={classes.container}>
      <main className="mx-auto max-w-7xl">
        <h1 className="mb-24 font-bold text-white">{title}</h1>
        <section className={classes.gridContainer} role="region" aria-label={title}>
          {renderGridItems()}
        </section>
      </main>
    </div>
  );
};
