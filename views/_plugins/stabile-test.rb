module Jekyll
    class TestBlock < Liquid::Block
        def initialize(tag_name, markup, tokens)
            @markup = markup
            super
        end

        def render(context)
            contents = super

            site = context.registers[:site]
            converter = site.find_converter_instance(::Jekyll::Converters::Markdown)

            # remove all multiple space sections
            # need a better way to detect indentaion
            # need to avoid removing indentation from code blocks
            content = contents.gsub(/^\s+/, '')

            # pipe param through liquid to make additional replacements possible
            content = Liquid::Template.parse(content).render context

            # parse content for markdown
            content = converter.convert(content)

            # render
            output = ''
            output += "<div class=\"module module--test\">"
            output += content
            output += "</div>"

            output
        end
    end
end

Liquid::Template.register_tag("test", Jekyll::TestBlock)
