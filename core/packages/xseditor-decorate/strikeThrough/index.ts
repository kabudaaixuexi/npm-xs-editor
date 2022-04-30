import changeStyle from '../../xseditor-utils/changeStyle'

export default {
    xs_tag: "xs-nav",
    xs_type: 1,
    xs_data: {
        class: `xs-strikeThrough`,
        onClick: (e: Target) => {
            changeStyle({command:'strikeThrough'})
        }
    },
    children: [
        {
            xs_type: 2,
            xs_value: '<svg t="1651307038328" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1838" width="16" height="16"><path d="M275.88 270.6v90.29h188.98v191.27h104.53V360.89H759.2V270.6zM464.86 635.99h104.52V856.3H464.86z" fill="#333333" p-id="1839"></path><path d="M276.48 577.18h483.05v34H276.48z" fill="#333333" p-id="1840"></path></svg>'
        },
    ],
}