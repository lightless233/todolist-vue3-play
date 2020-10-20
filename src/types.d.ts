export interface IzhCN {
    [key: string]: any
}
declare module 'ant-design-vue/lib/locale-provider/zh_CN' {
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
    const zhCN: IzhCN

    export default zhCN
}

declare module "ant-design-vue/es/locale/zh_CN" {
    import zhCN from "ant-design-vue/es/locale/zh_CN"
    const zhCN: IzhCN
    export default zhCN
}