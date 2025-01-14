import { formatGroupLabel } from './styles.css.ts'
import { GroupBase } from 'react-select'

export const FormatGroupLabel = (data: GroupBase<any>) => {
  return <div className={formatGroupLabel}>{data.label}</div>
}
