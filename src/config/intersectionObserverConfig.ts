/**
 * Intersection Observer default values are 
 * defined here to limit useIntersectionObserver useEffect over-the-top rerenders
 * :
 *     root: user viewport as opposed to a specific component wherever it is needed.
 *         In this project it is needed for ProjectCard due to its significant height.
 *     rootMargin: positive? Early detection is done 
 *                      (tried but not applied along with Skeleton solution due to flickering);
 *                 negative? Late detection is done.
 *     threshold: user 'visibility' criteria:
 *                  0? First pixel 'actions' 'visibility
 *                  0.5? 50% of the element does 
 *                      (tried but not applied due to needed max-height hard coded fine-tuning)
 */
export const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}