import React from 'react'
import { unified } from 'unified'

import remarkParse  from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import rehypeReact from 'rehype-react'
import RemarkCode from '../RemarkCode'
import style from './preview.module.css'
// import { defaultSchema } from 'hast-util-sanitize'
import 'github-markdown-css/github-markdown.css'

type Props = {
  doc: string
}

// const schema = {
//   ...defaultSchema,
//   attributes: {
//     ...defaultSchema.attributes,
//     code: [...(defaultSchema.attributes?.code || []), 'className']
//   }
// }

const Preview: React.FC<Props> = ({ doc }) => {
  const md: any = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeReact, {
      createElement: React.createElement,
      passNode: true,
      components: {
        code: RemarkCode
      }
    })
    .processSync(doc).result

  return <div className={style.preview}>{md}</div>
}

export default Preview
