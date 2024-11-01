import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SocialMediaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">CITIZENS RESPONSES</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-center bg-red-600 text-white py-2">
            <a href="https://www.youtube.com/channel/UCAXNgXbjL7LXnWgSGn-1aSA" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/videoseries?si=GYUuPwYTK_c7gUBL&list=PL4-omBQZv9QKoJEW4t512fxT7d_KlrzxF"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-center bg-blue-600 text-white py-2">
              <a href="https://www.facebook.com/MTEDDMA" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMTEDDMA&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="500"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center bg-blue-400 text-white py-2">
              <a href="https://twitter.com/MTEDDMAROC" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a
              className="twitter-timeline"
              data-height="500"
              href="https://twitter.com/MTEDDMAROC?ref_src=twsrc%5Etfw"
            >
              Tweets by MTEDDMAROC
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center bg-pink-600 text-white py-2">
              <a href="https://www.instagram.com/mtedd.ma/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://www.instagram.com/p/CzTU1beIEOy/embed/"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}