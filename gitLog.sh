git log \
    --pretty=format:'{%n  "commit": "%h",%n  "date": "%ad",%n  "message": "%f"%n},' \
    $@ | \
    perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \
    perl -pe 's/},]/}]/' > app/log/commit.json
