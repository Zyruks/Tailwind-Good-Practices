import { VideoGame } from '../../../models/video-game';
import { cn } from '../../../utils/cn';

export interface VideoGameProps extends Omit<VideoGame, 'id'> {
  /**
   * Additional class names for the container element.
   */
  className?: string;
}
export const GameCard = ({ className, title, subtitle, description, image }: VideoGameProps) => {
  const classes = {
    container: cn(
      'bg-gray-800 shadow-lg',
      'overflow-hidden rounded-lg',
      'transition-transform duration-300',
      'hover:scale-105',
      className,
    ),
    overlay: cn(
      'absolute inset-0 flex items-center justify-center',
      'bg-black bg-opacity-40 opacity-0',
      'transition-opacity duration-300 hover:opacity-100',
    ),
  };
  return (
    <article className={classes.container}>
      <figure className="relative h-48 overflow-hidden">
        <img className="size-full object-cover" src={image} alt={title} />
        <figcaption className={classes.overlay} aria-hidden="true">
          <p className="text-4xl">🎮</p>
        </figcaption>
      </figure>
      <div className="p-6">
        <h2 className="mb-2 text-xl font-bold text-white">{title}</h2>
        <h3 className="text-secondary-100">{subtitle}</h3>
        <p className="text-balance text-sm text-gray-400">{description}</p>
      </div>
    </article>
  );
};
