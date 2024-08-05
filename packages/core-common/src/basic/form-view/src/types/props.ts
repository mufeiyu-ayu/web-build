export interface FormViewProps {
  /* @description vo 名称 */
  voName: string
  /* @description 标题 */
  title?: string
  /* @description 表单容器 */
  layoutType?: 'div' | 'dialog' | 'drawer'
  /* @description 子列表配置 */
  children?: Record<string, any>
  /* @description 页面上下文信息 */
  content?: any
}
