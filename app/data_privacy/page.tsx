// app/dataprivacy/page.tsx
export default function DataPrivacy() {
    return (
        <div className="min-h-screen flex flex-col items-left bg-white text-black p-8">
            <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung von nextdataconsultig.com</h1>

            <>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\tpadding-inline-start: 0;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.page-description {\n    margin-bottom: 2em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-default_background {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 237, 214, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-default_background {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 237, 214, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-uiBlue { background-color: rgba(35, 131, 226, .07); }\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-transparentGray { background-color: rgba(227, 226, 224, 0); }\n.select-value-color-translucentGray { background-color: rgba(0, 0, 0, 0.06); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(249, 228, 188, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n.select-value-color-pageGlass { background-color: undefined; }\n.select-value-color-washGlass { background-color: undefined; }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n"
                    }}
                />
                <article id="10750188-a358-8002-b976-e20751dea814" className="page sans">
                    <div className="page-body">
                        <p id="10750188-a358-8070-903f-c3b774e794b2" className="">
                            Um Informationen zu den personenbezogenen Daten, dem Zweck und den
                            Parteien, welchen diese Daten mitgeteilt werden, zu erhalten,
                            kontaktieren Sie den Eigentümer
                        </p>
                        <h2 id="10750188-a358-801e-904b-ccc9bde25256" className="">
                            Anbieter und Verantwortlicher
                        </h2>
                        <p id="10750188-a358-801a-bb15-c68a520f4c7d" className="">
                            Vipul Chauhan, Helbingstraße 64, 45128 Essen
                        </p>
                        <p id="10750188-a358-801e-b980-e4919a5a2f5a" className="">
                            <strong>E-Mail-Adresse des Anbieters:</strong>{" "}
                            philipp.sowik@nextdataconsulting.com
                        </p>
                        <h2 id="10750188-a358-8034-bba3-e8db3dc3f603" className="">
                            Arten der erhobenen Daten
                        </h2>
                        <p id="10750188-a358-8004-a7d6-f2bfe9990e97" className="">
                            Der Eigentümer stellt keine Auflistung der erhobenen personenbezogenen
                            Daten zur Verfügung.
                        </p>
                        <p id="10750188-a358-809b-b083-dd2da17ea42a" className="">
                            Vollständige Details zu jeder Art von verarbeiteten personenbezogenen
                            Daten werden in den dafür vorgesehenen Abschnitten dieser
                            Datenschutzerklärung oder punktuell durch Erklärungstexte
                            bereitgestellt, die vor der Datenerhebung angezeigt werden.
                        </p>
                        <p id="10750188-a358-809c-9a52-d502aea505dc" className="">
                            Personenbezogene Daten können vom Nutzer freiwillig angegeben oder, im
                            Falle von Nutzungsdaten, automatisch erhoben werden, wenn diese
                            Anwendung genutzt wird.
                        </p>
                        <p id="10750188-a358-80be-abc8-c72fee3e96df" className="">
                            Sofern nicht anders angegeben, ist die Angabe aller durch diese
                            Anwendung angeforderten Daten obligatorisch. Weigert sich der Nutzer,
                            die Daten anzugeben, kann dies dazu führen, dass diese Anwendung dem
                            Nutzer ihre Dienste nicht zur Verfügung stellen kann. In Fällen, in
                            denen diese Anwendung die Angabe personenbezogener Daten ausdrücklich
                            als freiwillig bezeichnet, dürfen sich die Nutzer dafür entscheiden,
                            diese Daten ohne jegliche Folgen für die Verfügbarkeit oder die
                            Funktionsfähigkeit des Dienstes nicht anzugeben.
                        </p>
                        <p id="fc78c294-d4cc-45b8-987f-654405e35d68" className="">
                            Nutzer, die sich darüber im Unklaren sind, welche personenbezogenen
                            Daten obligatorisch sind, können sich an den Anbieter wenden.
                        </p>
                        <p id="10750188-a358-8075-8369-e4fff92cc736" className="">
                            Jegliche Verwendung von Cookies – oder anderer Tracking-Tools – durch
                            diese Anwendung oder Anbieter von Drittdiensten, die durch diese
                            Anwendung eingesetzt werden, dient dem Zweck, den vom Nutzer gewünschten
                            Dienst zu erbringen, und allen anderen Zwecken, die im vorliegenden
                            Dokumentund in der Cookie-Richtlinie beschrieben sind.
                        </p>
                        <p id="10750188-a358-80c8-9cbf-eed9ec317ec7" className="">
                            Die Nutzer sind für alle personenbezogenen Daten Dritter verantwortlich,
                            die durch diese Anwendung beschafft, veröffentlicht oder weitergegeben
                            werden.
                        </p>
                        <h2 id="10750188-a358-80c4-87af-dd1784ce71bb" className="">
                            Art und Ort der Datenverarbeitung
                        </h2>
                        <h3 id="10750188-a358-8084-b1f0-eba7e2501970" className="">
                            Verarbeitungsmethoden
                        </h3>
                        <p id="10750188-a358-804a-a2a4-dde8f29ac7e6" className="">
                            Der Anbieter verarbeitet die personenbezogenen Daten der Nutzer auf
                            ordnungsgemäße Weise und ergreift angemessene Sicherheitsmaßnahmen, um
                            den unbefugten Zugriff und die unbefugte Weiterleitung, Veränderung oder
                            Vernichtung von Daten zu vermeiden.
                        </p>
                        <p id="211492e0-98ff-48ed-ad2c-9c6d3760a52e" className="">
                            Die Datenverarbeitung wird mittels Computern oder IT-basierten Systemen
                            nach organisatorischen Verfahren und Verfahrensweisen durchgeführt, die
                            gezielt auf die angegebenen Zwecke abstellen. Zusätzlich zum
                            Verantwortlichen könnten auch andere Personen intern
                            (Personalverwaltung, Vertrieb, Marketing, Rechtsabteilung,
                            Systemadministratoren) oder extern – und in dem Fall soweit
                            erforderlich, vom Verantwortlichen als Auftragsverarbeiter benannt (wie
                            Anbieter technischer Dienstleistungen, Zustellunternehmen,
                            Hosting-Anbieter, IT-Unternehmen oder Kommunikationsagenturen) - diese
                            Anwendung betreiben und damit Zugriff auf die Daten haben. Eine aktuelle
                            Liste dieser Beteiligten kann jederzeit vom Anbieter verlangt werden.
                        </p>
                        <h3 id="555eb423-68ab-4643-8536-1b78c5228bef" className="">
                            Ort
                        </h3>
                        <p id="10750188-a358-804f-b05a-d599561fa28e" className="">
                            Die Daten werden in der Niederlassung des Anbieters und an allen anderen
                            Orten, an denen sich die an der Datenverarbeitung beteiligten Stellen
                            befinden, verarbeitet.
                        </p>
                        <p id="10750188-a358-8054-9d82-efa7ab893d01" className="">
                            Je nach Standort der Nutzer können Datenübertragungen die Übertragung
                            der Daten des Nutzers in ein anderes Land als das eigene beinhalten. Um
                            mehr über den Ort der Verarbeitung der übermittelten Daten zu erfahren,
                            können die Nutzer den Abschnitt mit den ausführlichen Angaben zur
                            Verarbeitung der personenbezogenen Daten konsultieren.
                        </p>
                        <h3 id="10750188-a358-8010-abce-ccf4a2d4d344" className="">
                            Speicherdauer
                        </h3>
                        <p id="d5f9f331-8914-4d92-992e-1c84891e96cd" className="">
                            Sofern in diesem Dokument nicht anderweitig festgelegt, werden
                            personenbezogene Daten so lange verarbeitet und gespeichert, wie es der
                            Zweck erfordert, zu dem sie erhoben wurden, und können ggf. aufgrund
                            einer zu erfüllenden rechtlichen Verpflichtung oder basierend auf der
                            Einwilligung des Nutzers auch länger aufbewahrt werden.
                        </p>
                        <h2 id="10750188-a358-808c-a185-c0a5a9bd9fe0" className="">
                            Cookie-Richtlinie
                        </h2>
                        <p id="10750188-a358-801d-bb06-dbb23d9d409a" className="">
                            Diese Anwendung verwendet Tracker. Weitere Informationen ergeben sich
                            aus der{" "}
                            <a href="https://www.iubenda.com/private/privacy-policy/2889899/cookie-policy?preview=true&ifr=true&height=680&newmarkup=no">
                                Cookie-Richtlinie
                            </a>
                            .
                        </p>
                        <h2 id="10750188-a358-80f5-9b18-fb1cb30aaac7" className="">
                            Weitere Informationen für Nutzer
                        </h2>
                        <h3 id="10750188-a358-8081-8e3b-f5f7e884fac2" className="">
                            Rechtsgrundlagen der Verarbeitung
                        </h3>
                        <p id="79a9462c-99be-48b5-9827-f2cdbbd0995c" className="">
                            Der Anbieter darf personenbezogene Daten von Nutzern nur dann
                            verarbeiten, wenn einer der folgenden Punkte zutrifft:
                        </p>
                        <ul id="d70ebfbc-e47a-4070-8b81-b7d50330b7d5" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                Die Nutzer haben ihre Einwilligung für einen oder mehrere bestimmte
                                Zwecke erteilt.
                            </li>
                        </ul>
                        <ul id="10750188-a358-80cc-9ecb-d4a01dc74298" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                die Datenerhebung ist für die Erfüllung eines Vertrages mit dem Nutzer
                                und/oder für vorvertragliche Maßnahmen daraus erforderlich;
                            </li>
                        </ul>
                        <ul id="10750188-a358-80d7-91d5-ea9f80312abe" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                die Verarbeitung ist für die Erfüllung einer rechtlichen
                                Verpflichtung, der der Anbieter unterliegt, erforderlich;
                            </li>
                        </ul>
                        <ul id="10750188-a358-8008-b973-e88202e1fd8c" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                die Verarbeitung steht im Zusammenhang mit einer Aufgabe, die im
                                öffentlichen Interesse oder in Ausübung hoheitlicher Befugnisse, die
                                dem Anbieter übertragen wurden, durchgeführt wird;
                            </li>
                        </ul>
                        <ul id="10750188-a358-8070-b552-d73d3a1753df" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                die Verarbeitung ist zur Wahrung der berechtigten Interessen des
                                Anbieters oder eines Dritten erforderlich.
                            </li>
                        </ul>
                        <p id="10750188-a358-807e-b0af-cd004a58a25b" className="">
                            In jedem Fall erteilt der Anbieter gerne Auskunft über die konkrete
                            Rechtsgrundlage, auf der die Verarbeitung beruht, insbesondere darüber,
                            ob die Angabe personenbezogener Daten eine gesetzliche oder vertragliche
                            Verpflichtung oder eine Voraussetzung für den Abschluss eines Vertrages
                            ist.
                        </p>
                        <h3 id="10750188-a358-8059-90d3-dd5f78c191ab" className="">
                            Weitere Informationen zur Speicherdauer
                        </h3>
                        <p id="1dd8a123-397c-4a83-80b7-676b011baebf" className="">
                            Sofern in diesem Dokument nicht anderweitig festgelegt, werden
                            personenbezogene Daten so lange verarbeitet und gespeichert, wie es der
                            Zweck erfordert, zu dem sie erhoben wurden, und können ggf. aufgrund
                            einer zu erfüllenden rechtlichen Verpflichtung oder basierend auf der
                            Einwilligung des Nutzers auch länger aufbewahrt werden.
                        </p>
                        <p id="10750188-a358-80fc-9174-c504a6646972" className="">
                            Daher gilt:
                        </p>
                        <ul id="10750188-a358-8041-b838-c8e8106cb287" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                Personenbezogene Daten, die zu Zwecken der Erfüllung eines zwischen
                                dem Anbieter und dem Nutzer geschlossenen Vertrages erhoben werden,
                                werden bis zur vollständigen Erfüllung dieses Vertrages gespeichert.
                            </li>
                        </ul>
                        <ul id="18780194-a2ee-4076-8a8f-da9ff5361242" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                Personenbezogene Daten, die zur Wahrung der berechtigten Interessen
                                des Anbieters erhoben werden, werden so lange aufbewahrt, wie es zur
                                Erfüllung dieser Zwecke erforderlich ist. Nutzer können nähere
                                Informationen über die berechtigten Interessen des Anbieters in den
                                entsprechenden Abschnitten dieses Dokuments oder durch Kontaktaufnahme
                                zum Anbieter erhalten.
                            </li>
                        </ul>
                        <p id="10750188-a358-8011-b8e4-ce77306179a9" className="">
                            Darüber hinaus ist es dem Anbieter gestattet, personenbezogene Daten für
                            einen längeren Zeitraum zu speichern, wenn der Nutzer in eine solche
                            Verarbeitung eingewilligt hat, solange die Einwilligung nicht widerrufen
                            wird. Darüber hinaus kann der Anbieter verpflichtet sein,
                            personenbezogene Daten für einen längeren Zeitraum aufzubewahren, wenn
                            dies zur Erfüllung einer gesetzlichen Verpflichtung oder auf Anordnung
                            einer Behörde erforderlich ist.
                        </p>
                        <p id="19516874-91f8-4ccf-84a4-7420305b0ebc" className="">
                            Nach Ablauf der Aufbewahrungsfrist werden personenbezogene Daten
                            gelöscht. Daher können das Auskunftsrecht, das Recht auf Löschung, das
                            Recht auf Berichtigung und das Recht auf Datenübertragbarkeit nach
                            Ablauf der Aufbewahrungsfrist nicht geltend gemacht werden.
                        </p>
                        <h3 id="10750188-a358-80de-91c3-d8bd016ad654" className="">
                            Die Rechte der Nutzer nach der Datenschutz-Grundverordnung (DSGVO)
                        </h3>
                        <p id="10750188-a358-8063-8b55-c000c97f4174" className="">
                            Die Nutzer können bestimmte Rechte in Bezug auf ihre vom Anbieter
                            verarbeiteten Daten ausüben.
                        </p>
                        <p id="9e1c04d3-feba-4f7e-a913-aa5f5077ddae" className="">
                            Nutzer haben im gesetzlich zulässigen Umfang insbesondere das Recht,
                            Folgendes zu tun:
                        </p>
                        <ul id="10750188-a358-80ff-9b9f-ebb8e844c6c9" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                <strong>Die Einwilligungen jederzeit widerrufen.</strong> Hat der
                                Nutzer zuvor in die Verarbeitung personenbezogener Daten eingewilligt,
                                so kann er die eigene Einwilligung jederzeit widerrufen.
                            </li>
                        </ul>
                        <ul id="9751f1d8-8f49-40c0-8e4f-cbb9449450fe" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                <strong>
                                    Widerspruch gegen die Verarbeitung ihrer Daten einlegen.
                                </strong>{" "}
                                Der Nutzer hat das Recht, der Verarbeitung seiner Daten zu
                                widersprechen, wenn die Verarbeitung auf einer anderen Rechtsgrundlage
                                als der Einwilligung erfolgt.
                            </li>
                        </ul>
                        <ul id="10750188-a358-801b-a46c-e459b5acd2d6" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                <strong>Auskunft bezüglich ihrer Daten erhalten.</strong> Der Nutzer
                                hat das Recht zu erfahren, ob die Daten vom Anbieter verarbeitet
                                werden, über einzelne Aspekte der Verarbeitung Auskunft zu erhalten
                                und eine Kopie der Daten zu erhalten.
                            </li>
                        </ul>
                        <ul id="f2652f64-f25e-4149-9f7d-4f8c8a0f0163" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                <strong>Überprüfen und berichtigen lassen.</strong> Der Nutzer hat das
                                Recht, die Richtigkeit seiner Daten zu überprüfen und deren
                                Aktualisierung oder Berichtigung zu verlangen.
                            </li>
                        </ul>
                        <ul id="472df01f-f1b6-4628-bb19-ea8c3631278c" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                <strong>Einschränkung der Verarbeitung ihrer Daten verlangen.</strong>{" "}
                                Die Nutzer haben das Recht, die Verarbeitung ihrer Daten
                                einzuschränken. In diesem Fall wird der Anbieter die Daten zu keinem
                                anderen Zweck als der Speicherung verarbeiten.
                            </li>
                        </ul>
                        <ul id="10fae7a0-3687-4d01-92c3-7c6c89dd30c8" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                <strong>
                                    Löschung oder anderweitiges Entfernen der personenbezogenen Daten
                                    verlangen.
                                </strong>{" "}
                                Die Nutzer haben das Recht, vom Anbieter die Löschung ihrer Daten zu
                                verlangen.
                            </li>
                        </ul>
                        <ul id="10750188-a358-80e5-ba99-d3cf0669cae3" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                <strong>
                                    Ihre Daten erhalten und an einen anderen Verantwortlichen übertragen
                                    lassen.
                                </strong>{" "}
                                Der Nutzer hat das Recht, seine Daten in einem strukturierten,
                                gängigen und maschinenlesbaren Format zu erhalten und, sofern
                                technisch möglich, ungehindert an einen anderen Verantwortlichen
                                übermitteln zu lassen.
                            </li>
                        </ul>
                        <ul id="10750188-a358-807f-9d45-e29b61136b93" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>
                                <strong>Beschwerde einreichen.</strong> Die Nutzer haben das Recht,
                                eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
                            </li>
                        </ul>
                        <p id="10750188-a358-8082-9e41-cb33fbbae1cc" className="">
                            Die Nutzer haben auch das Recht, sich über die Rechtsgrundlage der
                            Datenübermittlung ins Ausland oder an eine internationale Organisation,
                            die dem Völkerrecht unterliegt oder von zwei oder mehr Ländern gegründet
                            wurde, wie beispielsweise die UNO, sowie sich über die vom Anbieter
                            ergriffenen Sicherheitsmaßnahmen zum Schutz ihrer Daten aufklären zu
                            lassen.
                        </p>
                        <h3 id="10750188-a358-8049-a66d-deaabc8a593d" className="">
                            Details zum Widerspruchsrecht bezüglich der Verarbeitung
                        </h3>
                        <p id="10750188-a358-80f9-bbaa-e1670ac7a767" className="">
                            <strong>
                                Werden personenbezogene Daten im öffentlichen Interesse, in Ausübung
                                eines dem Anbieter übertragenen hoheitlichen Befugnisses oder zur
                                Wahrung der berechtigten Interessen des Anbieters verarbeitet, kann
                                der Nutzer dieser Verarbeitung widersprechen, indem er einen
                                Rechtfertigungsgrund angibt, der sich auf seine besondere Situation
                                bezieht.
                            </strong>
                        </p>
                        <p id="10750188-a358-80f8-9cd9-c2228c70f3f2" className="">
                            <strong>
                                Nutzer werden darüber informiert, dass sie der Verarbeitung der
                                personenbezogenen Daten für Direktwerbung jederzeit unentgeltlich ohne
                                Angabe von Gründen widersprechen können. Widerspricht der Nutzer der
                                Verarbeitung für Zwecke der Direktwerbung, so werden die
                                personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet. Ob
                                der Anbieter personenbezogene Daten für Direktwerbungszwecke
                                verarbeitet, können die Nutzer den entsprechenden Abschnitten dieses
                                Dokuments entnehmen.
                            </strong>
                        </p>
                        <h3 id="10750188-a358-809d-9302-e34a9202e4b4" className="">
                            Wie die Rechte ausgeübt werden können
                        </h3>
                        <p id="f5eb53ae-dfaf-4e9f-b241-b0fd9e84b9b3" className="">
                            Alle Anfragen zur Ausübung der Nutzerrechte können über die in diesem
                            Dokument angegebenen Kontaktdaten an den Eigentümer gerichtet werden.
                            Diese Anfragen können kostenlos gestellt werden und werden vom Anbieter
                            so früh wie möglich, spätestens innerhalb eines Monats, beantwortet und
                            den Nutzern die gesetzlich vorgeschriebenen Informationen zur Verfügung
                            gestellt. Jede Berichtigung oder Löschung personenbezogener Daten oder
                            die Einschränkung der Verarbeitung teilt der Anbieter allen Empfängern,
                            denen personenbezogene Daten offengelegt wurden, mit, falls es welche
                            gibt. Es sei denn, dies erweist sich als unmöglich oder ist mit einem
                            unverhältnismäßigen Aufwand verbunden. Der Anbieter unterrichtet den
                            Nutzer über diese Empfänger, wenn der Nutzer dies verlangt.
                        </p>
                        <h2 id="10750188-a358-803e-b647-f22ec55bac05" className="">
                            Weitere Informationen über die Erhebung und Verarbeitung von Daten
                        </h2>
                        <h3 id="10750188-a358-8090-82c0-db17ce650a4d" className="">
                            Rechtliche Maßnahmen
                        </h3>
                        <p id="10750188-a358-80d0-9776-e5e6df71e4db" className="">
                            Die personenbezogenen Daten des Nutzers können vom Anbieter zu Zwecken
                            der Rechtsdurchsetzung innerhalb oder in Vorbereitung gerichtlicher
                            Verfahren verarbeitet werden, die sich daraus ergeben, dass diese
                            Anwendung oder die dazugehörigen Dienste nicht ordnungsgemäß genutzt
                            wurden.
                        </p>
                        <p id="200957d2-c4b3-4ba2-b311-b46f0cb14aac" className="">
                            Der Nutzer erklärt, sich dessen bewusst zu sein, dass der Anbieter von
                            den Behörden zur Herausgabe von personenbezogenen Daten verpflichtet
                            werden könnte.
                        </p>
                        <h3 id="795336ca-6d28-43f0-85a5-660f31d3a4d7" className="">
                            Weitere Informationen über die personenbezogenen Daten des Nutzers
                        </h3>
                        <p id="10750188-a358-80e6-b7a0-c7b5ab74adf6" className="">
                            Zusätzlich zu den in dieser Datenschutzerklärung aufgeführten
                            Informationen kann diese Anwendung dem Nutzer auf Anfrage weitere
                            kontextbezogene Informationen zur Verfügung stellen, die sich auf
                            bestimmte Dienste oder auf die Erhebung und Verarbeitung
                            personenbezogener Daten beziehen.
                        </p>
                        <h3 id="10750188-a358-8012-b204-fca0448d2871" className="">
                            Systemprotokolle und Wartung
                        </h3>
                        <p id="10750188-a358-8003-b2fa-c94cdd648787" className="">
                            Diese Anwendung und die Dienste von Dritten können zu Betriebs- und
                            Wartungszwecken Dateien erfassen, die die über diese Anwendung
                            stattfindende Interaktion aufzeichnen (Systemprotokolle), oder andere
                            personenbezogene Daten (z. B. IP-Adresse) zu diesem Zweck verwenden.
                        </p>
                        <h3 id="10750188-a358-80a7-bd22-f360419b0d01" className="">
                            Nicht in dieser Datenschutzerklärung enthaltene Informationen
                        </h3>
                        <p id="10750188-a358-80e9-a566-db4fa2e9fc2f" className="">
                            Weitere Informationen über die Erhebung oder Verarbeitung
                            personenbezogener Daten können jederzeit vom Anbieter über die
                            aufgeführten Kontaktangaben angefordert werden.
                        </p>
                        <h3 id="10750188-a358-80a9-9f51-cda6331bb420" className="">
                            Änderungen dieser Datenschutzerklärung
                        </h3>
                        <p id="10750188-a358-80c0-bb65-c7488ead8a12" className="">
                            Der Anbieter behält sich vor, jederzeit Änderungen an dieser
                            Datenschutzerklärung vorzunehmen, indem Nutzer auf dieser Seite und
                            gegebenenfalls über diese Anwendung und/oder - soweit technisch und
                            rechtlich möglich – durch das Versenden einer Mitteilung über dem
                            Anbieter vorliegende Kontaktdaten der Nutzer informiert werden. Nutzern
                            wird daher nahegelegt, diese Seite regelmäßig aufzurufen und
                            insbesondere das am Seitenende angegebene Datum der letzten Änderung zu
                            prüfen.
                        </p>
                        <p id="11b97f5f-6bd0-4e1f-91b5-96c118f62a51" className="">
                            Soweit Änderungen eine auf der Einwilligung des Nutzers basierte
                            Datennutzung betreffen, so wird der Anbieter - soweit erforderlich -
                            eine neue Einwilligung einholen.
                        </p>
                    </div>
                </article>
                <span className="sans" style={{ fontSize: 14, paddingTop: "2em" }} />
            </>

        </div>
    );
}
