# React + TypeScript + Vite

Initial setup:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

View storybook
```bash
npm run storybook
```

## Notes
For packing the rectangles, I went with Guillotine Pack. It is a simple
algorithm that tries to pack the rectangles in a way that it minimizes the
waste of space. Though not always optimal, it fast and appropriate for
the task.

Visualizing the blueprint is implemented using SVG. I also researched using:
- THREE (i.e. using three-fiber) - very well suited and appropriate for the
target audience, but 3d models were not easily available/feasible to make
within time constraints.
- Isometric illustrations - visually a little too cartoony for the audience and
Tesla's identity, so I decided against it.

The UI and implementation are kept as simple as possible, to reduce any
ambiguity for the code reviewer. In a production environment, it's likely
there would already be some form and state management preferences already in
place.
