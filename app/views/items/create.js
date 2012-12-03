$("#<%= dom_id(@item.category) %>").append("<%= j(render 'item', :item => @item) %>");

$("#stat_<%= dom_id(@item.category) %>").html("<%= j(render 'retros/stat_info', :category => @item.category, :item_count => @item.retro.items.for_category(@item.category).count) %>");

$("#note_for_<%= @item.category.name.downcase %>").val('');

$("#<%= dom_id(@item) %>").effect('highlight', {}, 'slow')