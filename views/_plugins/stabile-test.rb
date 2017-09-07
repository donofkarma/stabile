module Jekyll
    class TestBlock < Liquid::Block
        def initialize(tag_name, markup, tokens)
            @markup = markup
            super
        end

        def render(context)
            contents = super

            # pipe param through liquid to make additional replacements possible
            content = Liquid::Template.parse(contents).render context

            #strip out special chars and replace spaces with hyphens
            # safeContent = content.rstrip.gsub(/[^\w\s]/,'').gsub(/[\s]/,'-')

            output = "<div class=\"module module--test\">"
            output += content.strip
            output += "</div>"

            output
        end
    end
end

Liquid::Template.register_tag("test", Jekyll::TestBlock)
