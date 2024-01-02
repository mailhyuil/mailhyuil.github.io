# framer-motion

## install

```sh
npm i framer-motion
```

## motion

```tsx
import { motion } from "framer-motion";

<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />;
/*
initial={{x:-100, y:-100}}
animate={{x:0, y:0}}
transition={{delay:0.4, type:'spring', stiffness:1000}}
whileHover={{
    scale:1.1,
    textShadow:"0px 0px 8px rgb(0,0,0)",
    boxShadow:"0px 0px 8px rgb(0,0,0)"
    }}
*/
```

## AnimatePresence

> Animate components when they're removed from the React tree.
>
> > 리액트 트리에서 사라질 때 보여주는 애니메이션 (e.g. 모달창 ...)

```tsx
import { motion, AnimatePresence } from "framer-motion";

export const MyComponent = ({ isVisible }) => <AnimatePresence>{isVisible && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}</AnimatePresence>;
```
