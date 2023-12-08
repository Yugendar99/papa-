var ButtonView = Backbone.View.extend({
    el: '.wrapper',

    events: {
        'click .yes': 'handleYesClick',
        'mouseover .no': 'handleNoMouseOver'
    },

    initialize: function() {
        // Add any initialization logic here
    },

    handleYesClick: function() {
        this.$('.text').html('Yay, see you Tommorow😉😍❣️!');
        this.$('.pic').attr('src', 'https://media.tenor.com/vYVDm2q_AQ4AAAAi/peach-goma-playful.gif');
        this.$('.no').addClass('none');
    },

    handleNoMouseOver: function() {
        const $noBtn = this.$('.no');
        const noBtnRect = $noBtn[0].getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        $noBtn.css('left', randomX + 'px');
        $noBtn.css('top', randomY + 'px');
    }
});

$(document).ready(function() {
    var buttonView = new ButtonView();
});
