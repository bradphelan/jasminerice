
    

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <script type="text/javascript">var NREUMQ=[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);</script>
        <title>lib/jasmine-jquery.js at master from velesin/jasmine-jquery - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://gs1.wac.edgecastcdn.net/80460E/assets/7ff8b72aae19ceedd05d9fb8978663731b1b5a13/stylesheets/bundle_github.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {
        assetHost: 'https://gs1.wac.edgecastcdn.net/80460E/assets'
      }
      var github_user = 'vivrass'
      
    </script>
    <script src="https://gs1.wac.edgecastcdn.net/80460E/assets/javascripts/jquery/jquery-1.6.1.min.js" type="text/javascript"></script>
    <script src="https://gs1.wac.edgecastcdn.net/80460E/assets/e8cc4b24be801fdf5b68ee7ca2bb0e6512c7f0c7/javascripts/bundle_github.js" type="text/javascript"></script>


    
    <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "velesin/jasmine-jquery"
      })
    </script>

    
  <link rel='canonical' href='/velesin/jasmine-jquery/blob/34a78d44807bbeda42abfc4cad825d2633148d70/lib/jasmine-jquery.js'>

  <link href="https://github.com/velesin/jasmine-jquery/commits/master.atom" rel="alternate" title="Recent Commits to jasmine-jquery:master" type="application/atom+xml" />

        <meta name="description" content="jasmine-jquery - jQuery matchers and fixture loader for Jasmine framework" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "velesin/jasmine-jquery";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "34a78d44807bbeda42abfc4cad825d2633148d70";
      GitHub.currentPath = 'lib/jasmine-jquery.js';
      GitHub.masterBranch = "master";

      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      _gaq.push(['_trackPageLoadTime']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_in page-blob  env-production">
    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
          <a class="logo boring" href="https://github.com/">
            
            <img alt="github" class="default" height="45" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/modules/header/logov6.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover" height="45" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/modules/header/logov6-hover.png" />
            <!--<![endif]-->
          </a>
       
        
          





  
    <div class="userbox">
      <div class="avatarname">
        <a href="https://github.com/vivrass"><img src="https://secure.gravatar.com/avatar/72b5b0685420e4d8e2b60c5b2cc2ecc3?s=140&d=https://gs1.wac.edgecastcdn.net/80460E/assets%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="20" height="20"  /></a>
        <a href="https://github.com/vivrass" class="name">vivrass</a>

        
        
          <a href="https://github.com/inbox/notifications" class="unread_count notifications_count new tooltipped downwards js-notification-count" title="Unread Notifications">1</a>
        
      </div>
      <ul class="usernav">
        <li><a href="https://github.com/">Dashboard</a></li>
        <li>
          
          <a href="https://github.com/inbox">Inbox</a>
          <a href="https://github.com/inbox" class="unread_count ">0</a>
        </li>
        <li><a href="https://github.com/account">Account Settings</a></li>
        <li><a href="/logout">Log Out</a></li>
      </ul>
    </div><!-- /.userbox -->
  


        
        <div class="topsearch">
  
    <form action="/search" id="top_search_form" method="get">
      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <div class="search placeholder-field js-placeholder-field">
        <label class="placeholder" for="global-search-field">Search…</label>
        <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" /> <input type="submit" value="Search" class="button" />
      </div>
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
    </form>
    <ul class="nav">
      <li><a href="/explore">Explore GitHub</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      
      <li><a href="/blog">Blog</a></li>
      
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public    instapaper_ignore readability-menu">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/velesin">velesin</a> / <strong><a href="/velesin/jasmine-jquery">jasmine-jquery</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="/velesin/jasmine-jquery/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/velesin/jasmine-jquery/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '0636573bb00bd200ee4cbb7092e2931ba9aeda43'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/velesin/jasmine-jquery/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '0636573bb00bd200ee4cbb7092e2931ba9aeda43'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked"><a href="#fork_box" class="minibutton btn-fork " rel="facebox"><span><span class="icon"></span>Fork</span></a></li>
            

            <div id="fork_box" style="display:none">
              <h2>Where do you want to fork this to?</h2>
              
                <div class="full-button">
                  <form action="/velesin/jasmine-jquery/fork" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="0636573bb00bd200ee4cbb7092e2931ba9aeda43" /></div>
                    <button class="classy"><span>Fork to vivrass</span></button>
                  </form>
                </div>
              
              
                <div class="rule"></div>
                
                  <div class="full-button">
                    <form action="/velesin/jasmine-jquery/fork" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="0636573bb00bd200ee4cbb7092e2931ba9aeda43" /></div>
                      <input id="organization" name="organization" type="hidden" value="ProtoYatter" />
                      <button class="classy"><span>Fork to ProtoYatter (organization)</span></button>
                    </form>
                  </div>
                
              
                <div class="rule"></div>
                
                  <p>You don't have permission to create new repositories for yatter</p>
                
              
            </div>
          

          <li id='pull_request_item' class='nspr' style='display:none'><a href="/velesin/jasmine-jquery/pull/new/master" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a></li>
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/velesin/jasmine-jquery/watchers" title="Watchers" class="tooltipped downwards">228</a></li>
          <li class="forks"><a href="/velesin/jasmine-jquery/network" title="Forks" class="tooltipped downwards">20</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="/velesin/jasmine-jquery" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="/velesin/jasmine-jquery/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/velesin/jasmine-jquery/network" highlight="repo_network">Network</a></li>
    <li><a href="/velesin/jasmine-jquery/pulls" highlight="repo_pulls">Pull Requests (3)</a></li>

    

    
      
      <li><a href="/velesin/jasmine-jquery/issues" highlight="issues">Issues (12)</a></li>
    

            
    <li><a href="/velesin/jasmine-jquery/graphs" highlight="repo_graphs">Graphs</a></li>

    

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="/velesin/jasmine-jquery/branches" class="dropdown">Switch Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown ">Switch Tags (6)</a>
              <ul>
                      
              <li><a href="/velesin/jasmine-jquery/blob/1.2.0/lib/jasmine-jquery.js" data-name="1.2.0">1.2.0</a></li>
            
                      
              <li><a href="/velesin/jasmine-jquery/blob/1.1.3/lib/jasmine-jquery.js" data-name="1.1.3">1.1.3</a></li>
            
                      
              <li><a href="/velesin/jasmine-jquery/blob/1.1.2/lib/jasmine-jquery.js" data-name="1.1.2">1.1.2</a></li>
            
                      
              <li><a href="/velesin/jasmine-jquery/blob/1.1.1/lib/jasmine-jquery.js" data-name="1.1.1">1.1.1</a></li>
            
                      
              <li><a href="/velesin/jasmine-jquery/blob/1.1.0/lib/jasmine-jquery.js" data-name="1.1.0">1.1.0</a></li>
            
                      
              <li><a href="/velesin/jasmine-jquery/blob/1.0.0/lib/jasmine-jquery.js" data-name="1.0.0">1.0.0</a></li>
            
                  </ul>
      
    </li>
    <li>
    
    <a href="/velesin/jasmine-jquery/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

      
        <a href="/velesin/jasmine-jquery/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>
      

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>jQuery matchers and fixture loader for Jasmine framework
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/velesin/jasmine-jquery/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="0636573bb00bd200ee4cbb7092e2931ba9aeda43" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="jQuery matchers and fixture loader for Jasmine framework">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://" rel="nofollow"></a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/velesin/jasmine-jquery/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="0636573bb00bd200ee4cbb7092e2931ba9aeda43" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
      <div class="url-box">
  
    <ul class="native-clones">
      <li><a href="http://mac.github.com" class="minibutton btn-clone-in-mac "><span><span class="icon"></span> Clone in Mac</span></a></li>
    </ul>
  

  <ul class="clone-urls">
    
      
      <li class="http_clone_url"><a href="https://github.com/velesin/jasmine-jquery.git" data-permissions="Read-Only">HTTP</a></li>
      <li class="public_clone_url"><a href="git://github.com/velesin/jasmine-jquery.git" data-permissions="Read-Only">Git Read-Only</a></li>
    
    
  </ul>
  <input type="text" spellcheck="false" class="url-field" />
        <span style="display:none" id="clippy_2572" class="url-box-clippy"></span>
      <span id="clippy_tooltip_clippy_2572" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://gs1.wac.edgecastcdn.net/80460E/assets/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_2572&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://gs1.wac.edgecastcdn.net/80460E/assets/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_2572&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

  <p class="url-description"><strong>Read+Write</strong> access</p>
</div>

    </div>

    <div class="frame frame-center tree-finder" style="display:none">
      <div class="breadcrumb">
        <b><a href="/velesin/jasmine-jquery">jasmine-jquery</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/velesin/jasmine-jquery/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>


        

      </div><!-- /.pagehead -->

      

  







<script type="text/javascript">
  GitHub.downloadRepo = '/velesin/jasmine-jquery/archives/master'
  GitHub.revType = "master"

  GitHub.repoName = "jasmine-jquery"
  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  
    GitHub.loggedIn = true
    GitHub.hasWriteAccess = false
    GitHub.hasAdminAccess = false
    GitHub.watchingRepo = false
    GitHub.ignoredRepo = false
    GitHub.hasForkOfRepo = ""
    GitHub.hasForked = false
  

  
</script>




<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/velesin/jasmine-jquery/commit/34a78d44807bbeda42abfc4cad825d2633148d70">added throwing exception when there are problems with loading fixture</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/127db1a98fec83952bac174cdd94803b?s=140&d=https://gs1.wac.edgecastcdn.net/80460E/assets%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/velesin">velesin</a> <span>(author)</span></div>
        <div class="date">
          <time class="js-relative-date" datetime="2011-07-12T00:01:17-07:00" title="2011-07-12 00:01:17">July 12, 2011</time>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/velesin/jasmine-jquery/commit/34a78d44807bbeda42abfc4cad825d2633148d70" class="js-commit-link" data-key="c">34a78d44807bbeda42ab</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/velesin/jasmine-jquery/tree/34a78d44807bbeda42abfc4cad825d2633148d70" class="js-tree-link" data-key="t">cc1d30b741e6ce177ba0</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/velesin/jasmine-jquery/tree/c41ce606a1d3e33a36dd920528c92e20faae30b7" class="js-parent-link" data-key="p">c41ce606a1d3e33a36dd</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="lib/jasmine-jquery.js/">
      <b><a href="/velesin/jasmine-jquery/tree/34a78d44807bbeda42abfc4cad825d2633148d70">jasmine-jquery</a></b> / <a href="/velesin/jasmine-jquery/tree/34a78d44807bbeda42abfc4cad825d2633148d70/lib">lib</a> / jasmine-jquery.js       <span style="display:none" id="clippy_1664" class="clippy">lib/jasmine-jquery.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://gs1.wac.edgecastcdn.net/80460E/assets/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_1664&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://gs1.wac.edgecastcdn.net/80460E/assets/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_1664&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="lib/jasmine-jquery.js/" data-canonical-url="/velesin/jasmine-jquery/blob/34a78d44807bbeda42abfc4cad825d2633148d70/lib/jasmine-jquery.js">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/velesin/jasmine-jquery/edit/__current_ref__/lib/jasmine-jquery.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                
                  <span>276 lines (222 sloc)</span>
                
                <span>7.226 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/velesin/jasmine-jquery/raw/master/lib/jasmine-jquery.js" id="raw-url">raw</a></li>
                
                  <li><a href="/velesin/jasmine-jquery/blame/master/lib/jasmine-jquery.js">blame</a></li>
                
                <li><a href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">readFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;read&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC3'><span class="p">};</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="kd">var</span> <span class="nx">loadFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC6'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC7'><span class="p">};</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="kd">var</span> <span class="nx">setFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">set</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC11'><span class="p">};</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="kd">var</span> <span class="nx">sandbox</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attributes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">sandbox</span><span class="p">(</span><span class="nx">attributes</span><span class="p">);</span></div><div class='line' id='LC15'><span class="p">};</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="kd">var</span> <span class="nx">spyOnEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">spyOn</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">);</span></div><div class='line' id='LC19'><span class="p">}</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">currentFixtures_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">currentFixtures_</span> <span class="o">||</span> <span class="k">new</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">();</span></div><div class='line' id='LC23'><span class="p">};</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">containerId</span> <span class="o">=</span> <span class="s1">&#39;jasmine-fixtures&#39;</span><span class="p">;</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">=</span> <span class="s1">&#39;spec/javascripts/fixtures&#39;</span><span class="p">;</span></div><div class='line' id='LC29'><span class="p">};</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">set</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cleanUp</span><span class="p">();</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createContainer_</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC34'><span class="p">};</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">load</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cleanUp</span><span class="p">();</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createContainer_</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">read</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">));</span></div><div class='line' id='LC39'><span class="p">};</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">read</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">htmlChunks</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fixtureUrls</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">urlCount</span> <span class="o">=</span> <span class="nx">fixtureUrls</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">urlIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">urlIndex</span> <span class="o">&lt;</span> <span class="nx">urlCount</span><span class="p">;</span> <span class="nx">urlIndex</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">htmlChunks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getFixtureHtml_</span><span class="p">(</span><span class="nx">fixtureUrls</span><span class="p">[</span><span class="nx">urlIndex</span><span class="p">]));</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">htmlChunks</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC50'><span class="p">};</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clearCache</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC54'><span class="p">};</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">cleanUp</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="nx">jQuery</span><span class="p">(</span><span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">containerId</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC58'><span class="p">};</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sandbox</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attributes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attributesToSet</span> <span class="o">=</span> <span class="nx">attributes</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jQuery</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;sandbox&quot; /&gt;&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">attributesToSet</span><span class="p">);</span></div><div class='line' id='LC63'><span class="p">};</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">createContainer_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">containerId</span> <span class="o">+</span> <span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC67'>&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="nx">jQuery</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">container</span><span class="p">);</span></div><div class='line' id='LC69'><span class="p">};</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getFixtureHtml_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span>  </div><div class='line' id='LC72'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span><span class="p">[</span><span class="nx">url</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">loadFixtureIntoCache_</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span><span class="p">[</span><span class="nx">url</span><span class="p">];</span></div><div class='line' id='LC76'><span class="p">};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">loadFixtureIntoCache_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">relativeUrl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC80'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s1">&#39;/$&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">+</span> <span class="nx">relativeUrl</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="nx">relativeUrl</span><span class="p">;</span></div><div class='line' id='LC81'>&nbsp;&nbsp;<span class="nx">jQuery</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">async</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// must be synchronous to guarantee that no tests are run before fixture is loaded</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cache</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dataType</span><span class="o">:</span> <span class="s1">&#39;html&#39;</span><span class="p">,</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">fixturesCache_</span><span class="p">[</span><span class="nx">relativeUrl</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">jqXHR</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">errorThrown</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Fixture could not be loaded: &#39;</span> <span class="o">+</span> <span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39; (status: &#39;</span> <span class="o">+</span> <span class="nx">status</span> <span class="o">+</span> <span class="s1">&#39;, message: &#39;</span> <span class="o">+</span> <span class="nx">errorThrown</span><span class="p">.</span><span class="nx">message</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">);</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC92'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC93'><span class="p">};</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">proxyCallTo_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">methodName</span><span class="p">,</span> <span class="nx">passedArguments</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="nx">methodName</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">passedArguments</span><span class="p">);</span></div><div class='line' id='LC97'><span class="p">};</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">browserTagCaseIndependentHtml</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jQuery</span><span class="p">(</span><span class="s1">&#39;&lt;div/&gt;&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">html</span><span class="p">).</span><span class="nx">html</span><span class="p">();</span></div><div class='line' id='LC104'><span class="p">};</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">elementToString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jQuery</span><span class="p">(</span><span class="s1">&#39;&lt;div /&gt;&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">clone</span><span class="p">()).</span><span class="nx">html</span><span class="p">();</span></div><div class='line' id='LC108'><span class="p">};</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">matchersClass</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">namespace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spiedEvents</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handlers</span><span class="o">:</span>    <span class="p">[]</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="nx">namespace</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spyOn</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">handler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">spiedEvents</span><span class="p">[[</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">jQuery</span><span class="p">(</span><span class="nx">selector</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="nx">eventName</span><span class="p">,</span> <span class="nx">handler</span><span class="p">);</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">handlers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">handler</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wasTriggered</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">spiedEvents</span><span class="p">[[</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">]]);</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cleanUp</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">spiedEvents</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">handlers</span>    <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC135'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC136'><span class="p">})(</span><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">);</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC139'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">jQueryMatchers</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveClass</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">className</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">className</span><span class="p">);</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeVisible</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:visible&#39;</span><span class="p">);</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeHidden</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:hidden&#39;</span><span class="p">);</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeSelected</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:selected&#39;</span><span class="p">);</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeChecked</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:checked&#39;</span><span class="p">);</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeEmpty</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:empty&#39;</span><span class="p">);</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toExist</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">size</span><span class="p">()</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveAttr</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attributeName</span><span class="p">,</span> <span class="nx">expectedAttributeValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasProperty</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="nx">attributeName</span><span class="p">),</span> <span class="nx">expectedAttributeValue</span><span class="p">);</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveId</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">==</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveHtml</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span> <span class="o">==</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">browserTagCaseIndependentHtml</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveText</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">text</span> <span class="o">&amp;&amp;</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">text</span><span class="p">.</span><span class="nx">test</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">text</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">text</span><span class="p">());</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">text</span><span class="p">()</span> <span class="o">==</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">==</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveData</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">expectedValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasProperty</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">key</span><span class="p">),</span> <span class="nx">expectedValue</span><span class="p">);</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBe</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">selector</span><span class="p">);</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toContain</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">selector</span><span class="p">).</span><span class="nx">size</span><span class="p">()</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeDisabled</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">){</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// tests the existence of a specific event binding</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHandle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;events&quot;</span><span class="p">);</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">events</span> <span class="o">&amp;&amp;</span> <span class="nx">events</span><span class="p">[</span><span class="nx">eventName</span><span class="p">].</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// tests the existence of a specific event binding + handler</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHandleWith</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">eventName</span><span class="p">,</span> <span class="nx">eventHandler</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">stack</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;events&quot;</span><span class="p">)[</span><span class="nx">eventName</span><span class="p">];</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">stack</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">stack</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">handler</span> <span class="o">==</span> <span class="nx">eventHandler</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hasProperty</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">actualValue</span><span class="p">,</span> <span class="nx">expectedValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">expectedValue</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">actualValue</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">actualValue</span> <span class="o">==</span> <span class="nx">expectedValue</span><span class="p">;</span></div><div class='line' id='LC232'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bindMatcher</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">methodName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">builtInMatcher</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Matchers</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">methodName</span><span class="p">];</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">matchersClass</span><span class="p">[</span><span class="nx">methodName</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="k">instanceof</span> <span class="nx">jQuery</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">jQueryMatchers</span><span class="p">[</span><span class="nx">methodName</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">elementToString</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">);</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">builtInMatcher</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">builtInMatcher</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC250'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">methodName</span> <span class="k">in</span> <span class="nx">jQueryMatchers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bindMatcher</span><span class="p">(</span><span class="nx">methodName</span><span class="p">);</span></div><div class='line' id='LC254'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC255'><span class="p">})();</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'><span class="nx">beforeEach</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC258'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addMatchers</span><span class="p">(</span><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">matchersClass</span><span class="p">);</span></div><div class='line' id='LC259'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addMatchers</span><span class="p">({</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveBeenTriggeredOn</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">+</span> <span class="s2">&quot; to have been triggered on&quot;</span> <span class="o">+</span> <span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">+</span> <span class="s2">&quot; not to have been triggered on&quot;</span> <span class="o">+</span> <span class="nx">selector</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">];</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">wasTriggered</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">);</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC269'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC270'><span class="p">});</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'><span class="nx">afterEach</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">cleanUp</span><span class="p">();</span></div><div class='line' id='LC274'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">cleanUp</span><span class="p">();</span></div><div class='line' id='LC275'><span class="p">});</span></div><div class='line' id='LC276'><br/></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        
          <div class="sponsor">
            <a href="http://www.rackspace.com" class="logo">
              <img alt="Dedicated Server" height="36" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/modules/footer/rackspace_logo.png?v2" width="38" />
            </a>
            Powered by the <a href="http://www.rackspace.com ">Dedicated
            Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
            Computing</a> of Rackspace Hosting<span>&reg;</span>
          </div>
        

        <ul class="links">
          
            <li class="blog"><a href="https://github.com/blog">Blog</a></li>
            <li><a href="https://github.com/about">About</a></li>
            <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
            <li><a href="https://github.com/training">Training</a></li>
            <li><a href="http://jobs.github.com">Job Board</a></li>
            <li><a href="http://shop.github.com">Shop</a></li>
            <li><a href="http://developer.github.com">API</a></li>
            <li><a href="http://status.github.com">Status</a></li>
          
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.10342s from fe2.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    <script>window._auth_token = "0636573bb00bd200ee4cbb7092e2931ba9aeda43"</script>
    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    
    
    <script type="text/javascript">(function(){var d=document;var e=d.createElement("script");e.async=true;e.src="https://d1ros97qkrwjf5.cloudfront.net/14/eum/rum.js	";e.type="text/javascript";var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s);})();NREUMQ.push(["nrf2","beacon-1.newrelic.com","2f94e4d8c2",64799,"dw1bEBZcX1RWRhoEClsAGhcMXEQ=",0,99,new Date().getTime()])</script>
  </body>
</html>

