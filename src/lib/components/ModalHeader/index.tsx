import { Button, Icon, Tooltip } from '@/lib'
import { contents, contentsTop, subtitleStyle, titleStyle, wrapper } from './styles.css'

interface ModalHeaderProps {
  title: string
  subtitle?: string
  width?: string
  information?: string
  onClick?: () => void
}

export const ModalHeader = ({
  title,
  subtitle,
  information,
  width = '100%',
  onClick,
}: ModalHeaderProps) => {
  return (
    <div className={wrapper} style={{ width }}>
      <div className={contents}>
        <div className={contentsTop}>
          <p className={titleStyle}>{title}</p>
          {information && (
            <Tooltip text={information}>
              <Icon icon="icon/info-circle-line" color="neutralGray400" />
            </Tooltip>
          )}
        </div>
        {subtitle && <p className={subtitleStyle}>{subtitle}</p>}
      </div>
      {onClick && (
        <Button
          leadingIcon="icon/cancle-line-medium"
          state="secondary"
          style="mono"
          size="xs"
          onClick={onClick}
        />
      )}
    </div>
  )
}
