import {tag} from '@/lib/components/Tag/styles.css.ts'

interface TagProps {
  readonly text: string
  readonly type?: 'standard' | 'primary' | 'warning' | 'gray'
  readonly isDisabled?: boolean
  readonly size?: 'md' | 'lg'
}

export const Tag = ({ text, type = 'standard', size = 'lg', isDisabled }: TagProps) => {
  return (
    <div className={tag({
      type,
      size,
      isDisabled
    })}>
       {text}
     </div>
  )
}
