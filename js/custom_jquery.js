! function(e) {
    "use strict";
    e((function() {
        function a(a, t, i) {
            function s(a, t) {
                var s = e(a[0]).slice(-t);
                null === a[1] ? s.addClass(i) : s.find(a[1]).addClass(i)
            }
            e.each(t, (function(t, i) {
                var o = i.columns;
                if (window.matchMedia(i.matchMedia).matches) {
                    var n = e(a[0]).length % o;
                    return s(a, 0 === n ? o : n), !1
                }
            }))
        }
        e(document).on("click", "[data-lightbox]", lity.options("template", '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><div class="lity-close" data-lity-close aria-label="Close (Press escape to close)"><span class="btn-line"></span></div></div></div></div>')), e('.navbar .navbar-nav .nav-link[href^="#"]').each((function() {
                e(this).animatedModal({
                    animatedIn: "fadeIn",
                    animatedOut: "fadeOut",
                    animationDuration: ".6s",
                    beforeOpen: function() {
                        e("#overlay-effect").addClass("slideup").removeClass("slidedown"), e("#" + this.modalTarget).css({
                            animationDelay: ".4s",
                            animationFillMode: "both"
                        })
                    },
                    afterOpen: function() {
                        e("#" + this.modalTarget).css({
                            animationFillMode: "none"
                        })
                    },
                    beforeClose: function() {
                        e("#overlay-effect").addClass("slidedown").removeClass("slideup"), e("#" + this.modalTarget).css({
                            animationDelay: ".4s",
                            animationFillMode: "both"
                        })
                    },
                    afterClose: function() {
                        e("#" + this.modalTarget).css({
                            animationFillMode: "none"
                        })
                    }
                })
            })), e(".utf-lightbox-wrapper-area").each((function() {
                e('.navbar .navbar-nav .nav-link[href^="#' + this.id + '"]').length || e(this).hide()
            })), e(document).on("mouseup", (function(a) {
                if (e(".navbar #navbarSupportedContent").hasClass("show")) {
                    var t = e(".navbar .navbar-menu");
                    t.is(a.target) || 0 !== t.has(a.target).length || t.trigger("click")
                }
            })),
            function() {
                var a, t, i = 2200,
                    s = 1500,
                    o = 1500;

                function n(e) {
                    var a = function(e) {
                        return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
                    }(e);
                    e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                        width: "2px"
                    }, s, (function() {
                        var t;
                        t = a, e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible"),
                            function(e, a) {
                                e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                                    width: e.width() + 10
                                }, s, (function() {
                                    setTimeout((function() {
                                        n(e)
                                    }), o)
                                }))
                            }(a)
                    }))
                }
                a = e(".cd-headline"), t = i, a.each((function() {
                    var a = e(this);
                    if (a.hasClass("clip")) {
                        var i = a.find(".cd-words-wrapper"),
                            s = i.width() + 10;
                        i.css("width", s)
                    }
                    setTimeout((function() {
                        n(a.find(".is-visible").eq(0))
                    }), t)
                }))
            }(), e(".hero-area-block").hasClass("video-variant") && e("#homeVideo").YTPlayer(), a(["#about .utf-services-section .utf-single-service", null], [{
                matchMedia: "(max-width: 767px)",
                columns: 1
            }, {
                matchMedia: "(max-width: 991px)",
                columns: 2
            }, {
                matchMedia: "(min-width: 991px)",
                columns: 3
            }], "rc-mb-0");
        var t, i, s;
        tns({
            container: "#about .utf-testimonials-section .utf-testimonial-slider",
            items: 2,
            gutter: 30,
            responsive: {
                0: {
                    items: 1,
                    gutter: 0
                },
                768: {
                    items: 2,
                    gutter: 30
                }
            },
            preventScrollOnTouch: "auto",
            slideBy: "page",
            mouseDrag: !0,
            swipeAngle: !1,
            speed: 400,
            controls: !1,
            autoHeight: !0,
            navPosition: "bottom"
        });

        ! function(n) {
            "use strict";
            n((function() {})), n(window).on("load", (function() {}))
        }(jQuery);

        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
		
		a(["#about .utf-pricing-section .utf-single-plan", null], [{
            matchMedia: "(max-width: 991px)",
            columns: 1
        }, {
            matchMedia: "(min-width: 991px)",
            columns: 3
        }], "rc-mb-0"), (t = function() {
            e("#resume .utf-skills-section .utf-single-skill").each((function() {
                var a = Math.min(100, Math.max(0, e(this).data("percentage"))),
                    t = e(this).find(".utf-skill-progress").outerWidth(!0),
                    i = t - t * (a / 100);
                e(this).find(".skill-percentage").text(a + "%").css("margin-right", i), e(this).find(".progress-bar").attr("aria-valuenow", a).css("width", a + "%")
            }))
        })(), e(window).on("resize", (function() {
            t()
        })), i = e("#portfolio .utf-portfolio-section .utf-portfolio-grid"), s = e("#portfolio .utf-portfolio-section .filter-control li"), i.imagesLoaded((function() {
            i.isotope({
                itemSelector: "#portfolio .utf-portfolio-section .single-item",
                masonry: {
                    horizontalOrder: !0
                }
            }), s.on("click", (function() {
                s.removeClass("tab-active"), e(this).addClass("tab-active");
                var a = e(this).data("filter");
                i.isotope({
                    filter: a,
                    transitionDuration: ".25s"
                })
            }))
        })), a(["#portfolio .utf-portfolio-section .single-item .portfolio-item", ".utf-portfolio-wrapper"], [{
            matchMedia: "(max-width: 991px)",
            columns: 2
        }, {
            matchMedia: "(min-width: 991px)",
            columns: 3
        }], "rc-mb-0"), a(["#blog .utf-blog-section .single-post", null], [{
            matchMedia: "(max-width: 991px)",
            columns: 1
        }, {
            matchMedia: "(min-width: 991px)",
            columns: 3
        }], "rc-mb-0"), e("#contact .utf-contact-section .contact-form").on("submit", (function(a) {
            var t = e(this),
                i = t.find("#contact-submit"),
                s = i.text(),
                o = t.find(".contact-feedback");
            a.preventDefault(), i.html("Sending...").addClass("wait").prop("disabled", !0), setTimeout((function() {
                e.ajax({
                    url: t.attr("action"),
                    type: "POST",
                    data: t.serialize()
                }).done((function(e) {
                    "success" == e ? (i.removeClass("wait").html("Success").addClass("success"), o.addClass("success").html("Thank you for your message. It has been sent.").fadeIn(200), setTimeout((function() {
                        i.html(s).removeClass("success").prop("disabled", !1), o.fadeOut(200).removeClass("success").html("")
                    }), 6e3), t[0].reset()) : (console.log(e), i.removeClass("wait").html("Success").addClass("success"), o.addClass("success").html("Thank you for your message. It has been sent.").fadeIn(200), setTimeout((function() {
                        i.html(s).removeClass("success").prop("disabled", !1), o.fadeOut(200).removeClass("success").html("")
                    }), 6e3))
                }))
            }), 1e3)
        }))
    })), 
	jQuery(window).on('load', function() {
		$('.preloader').delay(400).fadeOut(500);
	});
}(jQuery);