

function _(id) {
  return document.getElementById(id);
}

function dom_item_new(type, id, text, class_names)
{
    let item = document.createElement(type);

    if(id)
        item.id = id;

    if(text)
        item.innerHTML = text;

    if(class_names) {
      item.className = class_names;
    }

    return item;
}

function div_new(id, text, class_names) {
  return dom_item_new('div', id, text, class_names);
}

function span_new(id, text, class_names) {
  return dom_item_new('span', id, text, class_names);
}

