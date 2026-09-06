// Shared className fragments for patterns that show up in more than one
// component. Edit here instead of hunting through every file that uses
// the same look.

// The "card surface" look: a positioned flex-column box with a light
// border and white background. Used by Card.tsx and HomeCard.tsx.
// (position: relative matters here — some children, like .hexagon in
// Card.tsx, are absolutely positioned against this box.)
export const SURFACE_CARD =
  'relative flex flex-col border border-gray-200 bg-white';
